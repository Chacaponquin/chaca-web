import { DocSubSection } from "@modules/docs/interfaces"
import { SubSection, Title } from "./components"

interface Props {
  title: string
  subs: Array<DocSubSection>
  handleChangeSelectedDoc(section: DocSubSection): void
  selectedDoc: DocSubSection | null
}

export default function Section({ title, subs, handleChangeSelectedDoc, selectedDoc }: Props) {
  return (
    <li className="flex flex-col">
      <Title title={title} />

      <ul className="flex flex-col">
        {subs.map((subSection, i) => (
          <SubSection
            key={i}
            title={subSection.title}
            selected={subSection.title === selectedDoc?.title}
            handleChangeSelectedDoc={() => handleChangeSelectedDoc(subSection)}
          />
        ))}
      </ul>
    </li>
  )
}
