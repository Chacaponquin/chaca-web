import { CodesCard } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CodeSection } from "@modules/shared/modules/markdown/components/Markdown/components/CodesCard/domain"

interface Props {
  curl: string
  axios: string
}

export default function RouteExample({ axios, curl }: Props) {
  const sections: CodeSection[] = [
    { code: curl, language: "bash", title: "cURL" },
    { code: axios, language: "typescript", title: "axios" },
  ]

  return <CodesCard sections={sections} />
}
