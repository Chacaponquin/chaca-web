import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

interface Props {
  code: string
  sqlCode: string
}

export default function Transformation({ code, sqlCode }: Props) {
  const sections: CodeSection[] = [
    {
      code: code,
      language: "typescript",
      title: { en: "Schema definition", es: "Definición de un schema" },
    },
    { code: sqlCode, language: "sql", title: { en: "SQL", es: "SQL" } },
  ]

  return <CodesCard sections={sections} />
}
