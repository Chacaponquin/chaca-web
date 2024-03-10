import { useDocs } from "@modules/docs/hooks"
import { Section } from "./components"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
}

export default function Sections({ handleChangeSelectedDoc, selectedDoc }: Props) {
  const { docs } = useDocs()

  return (
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
  )
}
