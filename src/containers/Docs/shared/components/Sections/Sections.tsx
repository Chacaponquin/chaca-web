import { useDocs } from "@modules/docs/hooks"
import { Section } from "./components"
import { DocSubSection } from "@modules/docs/domain/core/base"

interface Props {
  selected: DocSubSection
}

export default function Sections({ selected }: Props) {
  const { docs } = useDocs()

  return (
    <ul className="flex flex-col w-full gap-y-0.5 px-4">
      {docs.map((doc) => (
        <Section key={doc.url} selected={selected} title={doc.title} subs={doc.sections} />
      ))}
    </ul>
  )
}
