import { SaveIndex } from "@modules/docs/domain/core/base/save-index"
import { INDEX_NAME } from "../src/modules/docs/domain/constants/argolia"
import { DOCS } from "../src/modules/docs/domain/constants/docs"
import { algoliasearch } from "algoliasearch"

const API_KEY = process.env.ALGOLIA_READ_API_KEY as string
const API_ID = process.env.ALGOLIA_API_ID as string

const client = algoliasearch(API_ID, API_KEY, {})

// clean objects
client.clearObjects({ indexName: INDEX_NAME }).then(() => {
  // create new objects
  const save = [] as SaveIndex[]

  for (const doc of DOCS) {
    save.push(...doc.save())
  }

  client.saveObjects({ indexName: INDEX_NAME, objects: save })
})
