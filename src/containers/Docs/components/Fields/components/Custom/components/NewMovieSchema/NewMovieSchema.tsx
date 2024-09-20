import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function NewMovieSchema() {
  const code = `
const movieSchema = chaca.schema({
    id: () => modules.id.uuid(),
    image: () => modules.image.film(),
    likes: () => modules.datatype.int({ min: 0, max: 50000 }),
    category: chaca.enum(["Horror", "War", "History", "Comedy", "Animation"]),
    forChildren: ({ currentFields }) => {
        return currentFields.category === "Animation" || currentFields.category === "Comedy"
    }
})
`

  return <Code code={code} language="typescript" title="Movie schema definition" />
}
