import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

interface Props {
  curl: string
  axios: string
}

export default function RouteExample({ axios, curl }: Props) {
  const sections: CodeSection[] = [
    { code: curl, language: "bash", title: { en: "curl", es: "curl" } },
    { code: axios, language: "typescript", title: { en: "axios", es: "axios" } },
  ]

  return <CodesCard sections={sections} />
}
