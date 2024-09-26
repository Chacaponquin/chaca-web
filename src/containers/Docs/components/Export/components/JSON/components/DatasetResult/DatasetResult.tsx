import { CodesCard } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CodeSection } from "@modules/shared/modules/markdown/components/Markdown/components/CodesCard/domain"

export default function DatasetResult() {
  const sections: CodeSection[] = [
    { code: "", language: "css", title: "User.json" },
    { code: "", language: "css", title: "Product.json" },
  ]

  return <CodesCard sections={sections} />
}
