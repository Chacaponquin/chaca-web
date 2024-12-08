import { SectionTitle } from "@modules/docs/domain/core/base"
import MiniCode from "../MiniCode/MiniCode"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  title: SectionTitle
  code?: boolean
}

export default function H2({ title, code = false }: Props) {
  const { language } = useLanguage()

  return (
    <h2 id={title.id} className="text-3xl mb-2.5 mt-12 font-fontTitleRegular dark:text-white">
      {code ? <MiniCode size="xl">{title.title[language]}</MiniCode> : title.title[language]}
    </h2>
  )
}
