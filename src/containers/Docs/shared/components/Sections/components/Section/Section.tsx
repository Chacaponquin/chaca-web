import { DocSubSection } from "@modules/docs/domain/core/base"
import { SubSection, Title } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  title: string
  subs: DocSubSection[]
  selected: DocSubSection
}

export default function Section({ title, subs, selected }: Props) {
  const { language } = useLanguage()

  return (
    <li className="flex flex-col mb-4">
      <Title title={title} />

      <ul className="flex flex-col gap-y-1">
        {subs.map((sub) => (
          <SubSection
            key={sub.url}
            title={sub.title[language]}
            active={selected.url === sub.url}
            url={sub.redirect}
          />
        ))}
      </ul>
    </li>
  )
}
