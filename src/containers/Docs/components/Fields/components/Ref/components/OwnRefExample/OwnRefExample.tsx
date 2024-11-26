import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function OwnRefExample() {
  const code = `
const schema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    parentId: chaca.ref('Category.id')
})

const dataset = chaca.dataset([
    {
        name: "Category",
        schema: schema,
        documents: 10
    }
])
  `

  return <Code code={code} language="typescript" title="Category schema definition" />
}
