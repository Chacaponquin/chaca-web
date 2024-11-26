import { Transformation } from "../../shared/components"

export default function ObjectTranformation() {
  const code = `
const schema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    users: {
        type: chaca.schema({ 
            id: chaca.key(chaca.sequence()),
            username: () => modules.internet.username(),
            email: () => modules.internet.email()
        }),
        isArray: 5
    }
})
`

  const sqlCode = `
CREATE TABLE Data (
    id INTEGER NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
    data_id INTEGER NOT NULL REFERENCES Data (id),
)
`

  return <Transformation code={code} sqlCode={sqlCode} />
}
