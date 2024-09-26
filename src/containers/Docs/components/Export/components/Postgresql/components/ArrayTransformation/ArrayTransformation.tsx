import { Transformation } from "../../shared/components"

export default function ArrayTransformation() {
  const code = `
const schema = chaca.schema({
    id: chaca.key(chaca.sequence())
    numbers: {
        type: () => modules.datatype.int({ min: 0, max: 10 }),
        isArray: 5
    }
})
`

  const sqlCode = `
CREATE TABLE Data (
    id INTEGER NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE Numbers (
    id INTEGER NOT NULL,
    value INTEGER NOT NULL,
    data_id INTEGER NOT NULL,
    FOREIGN KEY (data_id) REFERENCES Data (id)
)
`

  return <Transformation code={code} sqlCode={sqlCode} />
}
