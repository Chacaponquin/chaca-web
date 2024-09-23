import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

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

  return <Code code={code} language="typescript" title="Product sizes as enum" />
}
