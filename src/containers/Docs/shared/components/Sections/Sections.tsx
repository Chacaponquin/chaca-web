import { useDocs } from "@modules/docs/hooks"
import { Section } from "./components"
import { DocSubSection } from "@modules/docs/domain/core/base"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  selected: DocSubSection
}

export default function Sections({ selected }: Props) {
  const { language } = useLanguage()
  const { docs } = useDocs()

  return (
    <ul className="flex flex-col w-full gap-y-0.5">
      {docs.map((doc) => (
        <Section
          key={doc.url}
          selected={selected}
          title={doc.title[language]}
          subs={doc.sections}
        />
      ))}
    </ul>
  )
}
