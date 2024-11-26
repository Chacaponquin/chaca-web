import { Code } from "@markdown/components/Markdown/components"

export default function MovieSchemaDefinition() {
  const code = `
const movieSchema = chaca.schema({
    id: () => modules.id.uuid(),
    image: () => modules.image.film(),
    likes: () => modules.datatype.int({ min: 0, max: 50000 }),
    category: chaca.enum(["Horror", "War", "History", "Comedy"])
})
`

  return <Code code={code} language="typescript" title="Movie schema definition" />
}
