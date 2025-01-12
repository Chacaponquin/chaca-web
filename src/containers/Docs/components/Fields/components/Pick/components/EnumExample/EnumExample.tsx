import { Code } from "@markdown/components/Markdown/components"

export default function EnumExample() {
  const code = `
const schema = chaca.schema({
    sizes: {
        type: chaca.enum(["S", "L", "XL", "2XL", "3XL"]),
        isArray: {
            min: 1, 
            max: 4
        }
    }
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Product sizes as enum", es: "Tallas de un producto con un campo enum" }}
    />
  )
}
