import { Section } from "./components"
import { SelectedDoc } from "@containers/Docs/interfaces"
import { DocSection } from "@modules/docs/domain"
import clsx from "clsx"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  docs: Array<DocSection>
}

export default function SideBar({ handleChangeSelectedDoc, selectedDoc, docs }: Props) {
  const CLASS = clsx(
    "xl:flex flex-col hidden",
    "h-full min-w-[320px]",
    "px-4 py-2",
    "dark:border-r-[1px] dark:border-r-scale-7 border-r-2",
  )

  return (
    <nav className={CLASS}>
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
