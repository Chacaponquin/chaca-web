import { generateId } from "@modules/shared/modules/markdown/domain/id"
import React from "react"

interface Props {
  children: React.ReactNode
  id?: string
}

export default function H2({ children, id }: Props) {
  return (
    <h2
      id={id ? id : generateId(String(children))}
      className="text-2xl mb-2.5 mt-12 font-fontMedium dark:text-white"
    >
      {children}
    </h2>
  )
}
