import { useDocs } from "@modules/docs/hooks"
import { Section } from "./components"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
}

export default function SideBar({ handleChangeSelectedDoc, selectedDoc }: Props) {
  const { DOCS } = useDocs()

  return (
    <nav className="h-full flex flex-col min-w-[400px] px-4 py-2">
      <ul className="flex flex-col w-full gap-y-0.5">
        {DOCS.map((doc, index) => (
          <Section
            key={doc.id}
            title={doc.title}
            subs={doc.subSections}
            selectedDoc={selectedDoc}
            handleChangeSelectedDoc={handleChangeSelectedDoc}
            index={index}
          />
        ))}
      </ul>
    </nav>
  )
}
