import { ApiUrlBuilder } from "@containers/Docs/shared/domain/helpers/api-url-builder"
import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

const moduleUrl = ApiUrlBuilder.build("person/first_name")
const schemaUrl = ApiUrlBuilder.build("schema")

const libraryCode = `
import { modules } from "chaca"

modules.person.firstName() // "Rodrigo"
`

const apiModuleCode = `
axios.post("${moduleUrl}", {})
    .then(response => {
        response.data // "Amaya"
    })
    .catch(error => {
        console.log(error)
    })
`

const apiSchemaCode = `
axios.post(
        "${schemaUrl}",
        {
            name: {
                type: "module",
                module: "person.first_name"
            }
        }    
    )
    .then(response => {
        response.data // { name: "Jose" }
    })
    .catch(error => {
        console.log(error)
    })
`

const sections: CodeSection[] = [
  { code: libraryCode, language: "typescript", title: "Chaca SDK" },
  { code: apiModuleCode, language: "typescript", title: "Get module value" },
  { code: apiSchemaCode, language: "typescript", title: "Get schema object" },
]

export default function Comparation() {
  return <CodesCard sections={sections} />
}
