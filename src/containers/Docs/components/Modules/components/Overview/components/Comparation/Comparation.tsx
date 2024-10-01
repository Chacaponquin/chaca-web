import { useBuildUrl } from "@containers/Docs/components/Api/shared/hooks"
import { CodesCard } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CodeSection } from "@modules/shared/modules/markdown/components/Markdown/components/CodesCard/domain"

export default function Comparation() {
  const { url: moduleUrl } = useBuildUrl({ route: "api/module/person/first_name" })
  const { url: schemaUrl } = useBuildUrl({ route: "api/schema" })

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

  return <CodesCard sections={sections} />
}
