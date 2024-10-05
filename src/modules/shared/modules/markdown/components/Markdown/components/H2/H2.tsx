import { SectionTitle } from "@modules/docs/domain/core/base"
import MiniCode from "../MiniCode/MiniCode"

interface Props {
  title: SectionTitle
  code?: boolean
}

export default function H2({ title, code = false }: Props) {
  return (
    <h2 id={title.id} className="text-2xl mb-2.5 mt-12 font-fontMedium dark:text-white">
      {code ? <MiniCode>{title.title}</MiniCode> : title.title}
    </h2>
  )
}
