import { Transformation } from "../../shared/components"

export default function SchemaTransformation() {
  const code = `
const schema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    user: chaca.schema({
        username: () => modules.internet.username(),
        age: () => modules.datatype.int({ min: 15, max: 100 })
    })
})
`

  const sqlCode = `
CREATE TABLE Data (
    id INTEGER NULL,
    PRIMARY KEY (id)
)

CREATE TABLE User (
    id INTEGER NULL,
    username VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    FOREIGN KEY (data_id) REFERENCES Data (id),
    PRIMARY KEY (id)
)
`

  return <Transformation code={code} sqlCode={sqlCode} />
}
