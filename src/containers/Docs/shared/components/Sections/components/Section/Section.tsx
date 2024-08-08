import { DocSubSection } from "@modules/docs/domain/core/base"
import { SubSection, Title } from "./components"

interface Props {
  title: string
  subs: DocSubSection[]
  selected: DocSubSection
}

export default function Section({ title, subs, selected }: Props) {
  return (
    <li className="flex flex-col mb-4">
      <Title title={title} />

      <ul className="flex flex-col gap-y-1">
        {subs.map((sub) => (
          <SubSection
            key={sub.url}
            title={sub.title}
            active={selected.url === sub.url}
            url={sub.url}
          />
        ))}
      </ul>
    </li>
  )
}
