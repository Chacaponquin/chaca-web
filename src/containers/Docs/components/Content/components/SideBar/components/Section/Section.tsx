import { DocSubSection } from "@modules/docs/interfaces"
import { SubSection, Title } from "./components"
import { useSection } from "./hooks"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  title: string
  subs: Array<DocSubSection>
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  index: number
}

export default function Section({
  title,
  subs,
  handleChangeSelectedDoc,
  selectedDoc,
  index,
}: Props) {
  const { open, handleChangeOpen } = useSection()

  return (
    <li className="flex flex-col">
      <Title title={title} handleChangeOpen={handleChangeOpen} />

      {open && (
        <ul className="flex flex-col">
          {subs.map((subSection, subIndex) => (
            <SubSection
              key={subIndex}
              title={subSection.title}
              selected={
                index === selectedDoc?.sectionIndex && subIndex === selectedDoc?.subSectionIndex
              }
              handleChangeSelectedDoc={() =>
                handleChangeSelectedDoc({ sectionIndex: index, subSectionIndex: subIndex })
              }
            />
          ))}
        </ul>
      )}
    </li>
  )
}
