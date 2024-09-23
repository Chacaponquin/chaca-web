import { CodesCard } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CodeSection } from "@modules/shared/modules/markdown/components/Markdown/components/CodesCard/domain"

export default function DatasetResult() {
  const sections: CodeSection[] = [
    { code: "", language: "css", title: "User.csv" },
    { code: "", language: "css", title: "Product.csv" },
  ]

  return <CodesCard sections={sections} />
}
