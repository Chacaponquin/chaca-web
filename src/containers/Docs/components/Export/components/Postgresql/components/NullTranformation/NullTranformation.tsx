import { Transformation } from "../../shared/components"

export default function NullTranformation() {
  const code = `
const schema = chaca.schema({
    id: chaca.sequence(),
    username: () => modules.internet.username(),
    image: {
        type: () => modules.image.people(),
        possibleNull: 0.5
    }
})
`

  const sqlCode = `
CREATE TABLE Data (
    id INTEGER NOT NULL,
    username VARCHAR(255) NOT NULL,
    image VARCHAR(255)
)
`

  return <Transformation code={code} sqlCode={sqlCode} />
}
