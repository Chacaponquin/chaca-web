import { CodesCard } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CodeSection } from "@modules/shared/modules/markdown/components/Markdown/components/CodesCard/domain"

export default function UserSchemaDefinition() {
  const js = `
import { chaca, modules } from 'chaca'

const schema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    username: modules.internet.username(),
    email: modules.internet.email(),
    password: modules.internet.password({ len: 8 }),
    image: modules.image.people(),
    age: modules.datatype.int({ min: 18, max: 100 })
})
`

  const ts = `
import { chaca, modules } from 'chaca'

interface User {
    id: number
    username: string
    email: string
    password: string
    image: string
    age: number
}

const schema = chaca.schema<User>({
    id: chaca.key(chaca.sequence()),
    username: modules.internet.username(),
    email: modules.internet.email(),
    password: modules.internet.password({ len: 8 }),
    image: modules.image.people(),
    age: modules.datatype.int({ min: 18, max: 100 })
})
`

  const sections: CodeSection[] = [
    { language: "javascript", code: js, title: "JS" },
    { code: ts, language: "typescript", title: "TS" },
  ]

  return <CodesCard sections={sections} />
}
