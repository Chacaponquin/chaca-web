import { generateId } from "@modules/shared/modules/markdown/domain/id"

interface Props {
  children: string
  id?: string
}

export default function H2({ children, id }: Props) {
  return (
    <h2
      id={id ? id : generateId(children)}
      className="text-2xl mb-2.5 mt-12 font-fontMedium dark:text-white"
    >
      {children}
    </h2>
  )
}
