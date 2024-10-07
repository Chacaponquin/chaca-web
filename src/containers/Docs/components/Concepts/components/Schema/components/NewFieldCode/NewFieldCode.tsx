import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function NewFieldCode() {
  const code = `
import { chaca, modules } from 'chaca'

const schema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    username: () => modules.internet.username(),
    email: () => modules.internet.email(),
    password: () => modules.internet.password({ len: 8 }),
    image: () => modules.image.people(),
    age: () => modules.datatype.int({ min: 18, max: 100 })
})
`

  return <Code title="user.js" code={code} language="javascript" />
}
