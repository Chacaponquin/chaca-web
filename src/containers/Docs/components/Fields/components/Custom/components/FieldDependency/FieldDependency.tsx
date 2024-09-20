import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Code,
  Link,
  P,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"

export default function FieldDependency() {
  const code = `
const movieSchema = chaca.schema({
    id: () => modules.id.uuid(),
    image: () => modules.image.film(),
    likes: () => modules.datatype.int({ min: 0, max: 50000 }),
    forChildren: ({ currentFields }) => {
        currentFields.category // undefined
    }
    category: chaca.enum(["Horror", "War", "History", "Comedy", "Animation"]),
})
`

  return (
    <Warning title="Dependencia entre campos">
      <P>
        Los campos dentro de un <Link to={SCHEMA.redirect}>schema</Link> se generan de forma
        secuencial. Por lo que se debe evitar intentar acceder desde un campo al valor de otro que
        se encuentre definido más abajo en el objeto.
      </P>

      <Code code={code} language="typescript" title="Wrong fields dependency" />
    </Warning>
  )
}
