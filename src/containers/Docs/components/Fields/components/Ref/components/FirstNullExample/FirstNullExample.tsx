import { ExampleCode } from "@modules/shared/modules/markdown/components/Markdown/components/Code/components"

export default function FirstNullExample() {
  const code = `
const schema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    parentId: chaca.ref('Category.id')
})

const dataset = chaca.dataset([
    {
        name: "Category",
        schema: schema,
        documents: 5
    }
])
    
dataset.generate()

/*
{
    Category: [
        { id: 1, parent: null },
        { id: 2, parent: 1 },
        { id: 3, parent: 1 },
        { id: 4, parent: 2 },
        { id: 5, parent: 3 }
    ]
}
*/
`

  return <ExampleCode code={code} language="typescript" className="mt-1" />
}
