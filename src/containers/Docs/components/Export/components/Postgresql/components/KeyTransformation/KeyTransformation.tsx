import { Transformation } from "../../shared/components"

export default function KeyTransformation() {
  const code = `
const schema = chaca.schema({
    id: chaca.key(chaca.sequence())
})
`

  const sqlCode = `
CREATE TABLE DATA (
    id INTEGER NOT NULL,
    PRIMARY_KEY (id)
)
`

  return <Transformation code={code} sqlCode={sqlCode} />
}
