import { Code } from "@markdown/components/Markdown/components"

export default function EnumResult() {
  const code = `
schema.object()

// result
{
    sizes: ["S", "L", "L"]
}
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{
        en: "Product sizes as enum result",
        es: "Resultado de la generación de las tallas de un producto",
      }}
    />
  )
}
