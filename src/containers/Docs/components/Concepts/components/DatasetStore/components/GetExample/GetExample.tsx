import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function GetExample() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.sequence(),
    username: () => modules.internet.username()
})

const productSchema = chaca.schema({
    field: ({ store }) => {
        // get schema documents
        store.get("User") // [{ ...user }, { ...user }, { ...user }, ...]

        // get user id's
        store.get("User.id") // [1, 2, 3, 4, 5, ...]

        // get user id's where id is less than 5
        store.get("User.id", { 
            where: () => {
                return field.id < 5
            }
        }) // [1, 2, 3, 4]
    }
})
`

  return <Code code={code} language="typescript" title="Get schema values example" />
}
