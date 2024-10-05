import { SectionTitle } from "@modules/docs/domain/core/base"

interface Props {
  title: SectionTitle
}

export default function H3({ title }: Props) {
  return (
    <h3 id={title.id} className="text-xl mt-8 mb-1 font-fontMedium text-white">
      {title.title}
    </h3>
  )
}
