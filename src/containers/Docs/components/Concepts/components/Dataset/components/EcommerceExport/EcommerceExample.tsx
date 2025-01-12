import { Code } from "@markdown/components/Markdown/components"

export default function EcommerceExample() {
  const code = `
dataset.export({
    filename: "ecommmerce",
    format: "json",
    location: "data",
    verbose: false
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Export Ecommerce dataset", es: "Exportar dataset de Ecommerce" }}
    />
  )
}
