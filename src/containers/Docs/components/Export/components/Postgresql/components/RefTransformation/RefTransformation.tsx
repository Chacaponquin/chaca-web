import { Transformation } from "../../shared/components"

export default function RefTransformation() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    name: () => modules.person.firstName(),
    age: () => modules.datatype.int({ min: 18, max: 1000 }),
})

const productSchema = chaca.schema({
    id: chaca.key(chaca.sequence())
    title: () => modules.lorem.words(),
    price: () => modules.datatype.float({ min: 0, max: 100, precision: 2 }),
    user_id: chaca.ref("User.id")
})

const dataset = chaca.dataset([
    {
        name: "User",
        schema: userSchema,
        documents: 5
    },
    {
        name: "Product",
        schema: productSchema,
        documents: 10
    }
])
`

  const sqlCode = `
CREATE TABLE User (
    id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE Product (
    id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES User (id)
)
`

  return <Transformation code={code} sqlCode={sqlCode} />
}
