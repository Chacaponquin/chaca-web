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

  return <Code code={code} language="typescript" title="Export ecommerce dataset" />
}
