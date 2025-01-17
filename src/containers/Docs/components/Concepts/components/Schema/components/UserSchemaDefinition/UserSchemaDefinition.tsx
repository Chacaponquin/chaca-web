import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

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
  { language: "javascript", code: js, title: { en: "JS", es: "js" } },
  { code: ts, language: "typescript", title: { en: "TS", es: "TS" } },
]

export default function UserSchemaDefinition() {
  return <CodesCard sections={sections} />
}
