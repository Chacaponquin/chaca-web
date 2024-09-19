import { generateId } from "@modules/shared/modules/markdown/domain/id"

interface Props {
  children: string
  id?: string
}

export default function H3({ children, id }: Props) {
  return (
    <h3
      id={id ? id : generateId(children)}
      className="text-xl mt-8 mb-1 font-fontMedium text-white"
    >
      {children}
    </h3>
  )
}
