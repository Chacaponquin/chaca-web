import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ArrayFieldExample() {
  const code = `
const schema = chaca.schema({
    numbers: {
        type: () => modules.datatype.int({ min: 5, max: 10 }),
        isArray: 3 // returns an array with 3 numbers
    }
})

schema.object()

// result
{
   numbers: [7, 2, 9]  
}
`

  return <Code code={code} language="typescript" title="" />
}
