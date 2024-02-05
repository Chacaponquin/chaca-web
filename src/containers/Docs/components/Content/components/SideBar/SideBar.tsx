import { Section } from "./components"
import { SelectedDoc } from "@containers/Docs/interfaces"
import { DocSection } from "@modules/docs/domain"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  docs: Array<DocSection>
}

export default function SideBar({ handleChangeSelectedDoc, selectedDoc, docs }: Props) {
  return (
    <nav className="h-full flex flex-col min-w-[320px] px-4 py-2 dark:border-r-[1px] dark:border-r-scale-7 border-r-2">
      <ul className="flex flex-col w-full gap-y-0.5">
        {docs.map((doc) => (
          <Section
            key={doc.id}
            title={doc.title}
            subs={doc.subSections}
            selectedDoc={selectedDoc}
            id={doc.id}
            handleChangeSelectedDoc={handleChangeSelectedDoc}
          />
        ))}
      </ul>
    </nav>
  )
}
