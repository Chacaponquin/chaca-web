import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"
import { useMemo } from "react"

export default function UserSchemaCode() {
  const js = `
import { chaca, modules } from 'chaca'

const schema = chaca.schema({
  id: chaca.sequence(),
  username: () => modules.internet.username(),
  image: () => modules.image.people(),
  email: () => modules.internet.email()
})
`

  const ts = `
import { chaca, modules } from 'chaca'

interface User {
  id: string,
  username: string,
  image: string,
  email: string
}

const schema = chaca.schema<User>({
  id: chaca.sequence(),
  username: () => modules.internet.username(),
  image: () => modules.image.people(),
  email: () => modules.internet.email()
})
`

  const sections: CodeSection[] = useMemo(() => {
    const s: CodeSection[] = [
      { code: js, language: "javascript", title: "JS" },
      { code: ts, language: "typescript", title: "TS" },
    ]

    return s
  }, [])

  return <CodesCard sections={sections} />
}
