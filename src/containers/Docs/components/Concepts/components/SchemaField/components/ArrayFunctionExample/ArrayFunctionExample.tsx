import { Code } from "@markdown/components/Markdown/components"

export default function ArrayFunctionExample() {
  const code = `
const userSchema = chaca.schema({
    id: () => modules.id.uuid(),
    age: () => modules.datatype.int({ min: 18, max: 90 }),
    posts: {
        type: chaca.ref('Post.id'),
        isArray: ({ currentFields }) => {
            if(currentFields.age > 40) {
                return {
                    min: 10,
                    max: 20
                }
            }
            else {
                return {
                    max: 5           
                }
            }
        }
    }
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Array function example", es: "Ejemplo de un campo arreglo con una función" }}
    />
  )
}
