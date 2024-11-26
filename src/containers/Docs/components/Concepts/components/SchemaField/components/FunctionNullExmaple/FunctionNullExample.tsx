import { Code } from "@markdown/components/Markdown/components"

export default function FunctionNullExample() {
  const code = `
const schema = chaca.schema({ 
    field1: () => modules.datatype.int({ min: 0, max: 10 }),
    field2: {
        type: () => modules.datatype.int({ min: 0, max: 10 }),
        possibleNull: ({ currentFields }) => {
            if(currentFields.field1 > 5){
                return 0.3
            } else {
                return 0.7 
            }
        }
    }
})
`

  return <Code code={code} language="typescript" title="Null function example" />
}
