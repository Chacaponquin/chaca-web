import { DocSubSection } from "@modules/docs/domain"
import { SubSection, Title } from "./components"
import { useSection } from "./hooks"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  title: string
  subs: Array<DocSubSection>
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  id: string
}

export default function Section({ title, subs, handleChangeSelectedDoc, selectedDoc, id }: Props) {
  const { open, handleChangeOpen } = useSection()

  return (
    <li className="flex flex-col">
      <Title
        title={title}
        handleChangeOpen={handleChangeOpen}
        selected={selectedDoc ? selectedDoc.sectionsId.includes(id) : false}
      />

      {open && (
        <ul className="flex flex-col pl-4 gap-y-1">
          {subs.map((subSection) => (
            <SubSection
              key={subSection.id}
              title={subSection.title}
              selected={
                selectedDoc
                  ? selectedDoc.sectionsId.includes(id) && selectedDoc.docId === subSection.id
                  : false
              }
              handleChangeSelectedDoc={() => {
                handleChangeSelectedDoc({ docId: subSection.id, sectionsId: [id] })
              }}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
