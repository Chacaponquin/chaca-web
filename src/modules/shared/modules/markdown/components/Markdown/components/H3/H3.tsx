import { SectionTitle } from "@modules/docs/domain/core/base"
import MiniCode from "../MiniCode/MiniCode"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  title: SectionTitle
  code?: boolean
}

export default function H3({ title, code = false }: Props) {
  const { language } = useLanguage()

  return (
    <h3 id={title.id} className="text-2xl mt-8 mb-1 font-fontTitleRegular text-white">
      {code ? <MiniCode size="base"> {title.title[language]}</MiniCode> : title.title[language]}
    </h3>
  )
}
