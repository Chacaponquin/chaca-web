import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function FunctionExample() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.sequence(),
    sex: chaca.probability([
        { value: "male", chance: 0.5 },
        { 
            value: "female", 
            chance: ({ store, currentFields }) => {
                const posts = store.get("Post.category", {
                    where: (fields) => fields.userId === currentFields.id
                })

                const count = posts.map(c => c === "Beauty")

                return count > 3 ? 0.8 : 0.2
            }
        }
    ])
})
`

  return <Code code={code} language="typescript" title="Sex field using chance function" />
}
