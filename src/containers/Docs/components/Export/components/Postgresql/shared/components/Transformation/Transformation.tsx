import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

interface Props {
  code: string
  sqlCode: string
}

export default function Transformation({ code, sqlCode }: Props) {
  const sections: CodeSection[] = [
    { code: code, language: "typescript", title: "Schema definition" },
    { code: sqlCode, language: "sql", title: "SQL" },
  ]

  return <CodesCard sections={sections} />
}
