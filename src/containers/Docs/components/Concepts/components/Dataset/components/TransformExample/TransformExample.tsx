import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformExample() {
  const code = `
dataset.transform({
    filename: "ecommmerce",
    format: "json",
})
`

  return <Code code={code} language="typescript" title="Transform ecommerce dataset" />
}
