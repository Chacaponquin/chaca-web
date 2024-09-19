import { generateId } from "@modules/shared/modules/markdown/domain/id"

interface Props {
  children: string
  id?: string
}

export default function H1({ children, id }: Props) {
  return (
    <h1
      id={id ? id : generateId(children)}
      className="text-3xl font-fontSemiBold mb-5 dark:text-white"
    >
      {children}
    </h1>
  )
}
