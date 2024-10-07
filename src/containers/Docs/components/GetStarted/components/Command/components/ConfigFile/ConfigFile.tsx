import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
const { chaca, modules } = require("chaca")

module.exports = chaca.schema({
  id: () => modules.id.uuid(),
  username: () => modules.internet.username(),
  image: { type: () => modules.image.people(), possibleNull: 0.5 },
})
`

export default function ConfigFile() {
  return <Code code={code} title="build-users.js" language="javascript" />
}
