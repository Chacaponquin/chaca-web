import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Link,
  List,
  ListItem,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { ExampleCode } from "@modules/shared/modules/markdown/components/Markdown/components/Code/components"

const schemaCode = `
const { chaca, modules } = require("chaca")

module.exports = chaca.schema({
  id: () => modules.id.uuid(),
  username: () => modules.internet.username(),
  image: { type: () => modules.image.people(), possibleNull: 0.5 },
})
`

const datasetCode = `
const { chaca, modules } = require("chaca");

const USER_SCHEMA = chaca.schema({
  id: chaca.key(() => modules.id.uuid()),
  username: () => modules.internet.username(),
});

const POST_SCHEMA = chaca.schema({
  id: chaca.key(() => modules.id.uuid()),
  title: () => modules.lorem.words(),
  user: chaca.ref("User.id"),
});

module.exports = chaca.dataset([
  { name: "User", schema: USER_SCHEMA, documents: 3 },
  { name: "Post", schema: POST_SCHEMA, documents: 10 },
]);
`

const elseCode = `
module.exports = [1, 2, 3, 4, 5]
`

export default function Datatypes() {
  return (
    <List>
      <ListItem>
        <>
          <P>
            Un <Link to={SCHEMA.redirect}>schema</Link> de la siguiente forma:
          </P>

          <ExampleCode code={schemaCode} language="javascript" />
        </>
      </ListItem>

      <ListItem>
        <P>
          Un <Link to={DATASET.redirect}>dataset</Link> de la siguiente forma:
        </P>

        <ExampleCode code={datasetCode} language="javascript" />
      </ListItem>

      <ListItem>
        <>
          <P>
            En caso de que no se exporte ninguna de las anteriores opciones se utilizará como
            referencia cualquier tipo de dato que se haya exportado en el archivo.
          </P>

          <ExampleCode code={elseCode} language="javascript" />
        </>
      </ListItem>
    </List>
  )
}
