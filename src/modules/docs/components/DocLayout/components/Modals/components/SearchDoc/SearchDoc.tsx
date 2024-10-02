import { BaseModal } from "@modules/modal/components"
import { InstantSearch } from "react-instantsearch"
import { useDocs } from "@modules/docs/hooks"
import { INDEX_NAME } from "@modules/docs/domain/constants/argolia"
import { Result, Search } from "./components"

export default function SearchDoc() {
  const { client } = useDocs()

  return (
    <BaseModal name="search-doc">
      <InstantSearch searchClient={client} indexName={INDEX_NAME} future={{}} routing>
        <Search />
        <Result />
      </InstantSearch>
    </BaseModal>
  )
}
