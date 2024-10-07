import React from "react"

interface Props {
  children: React.ReactNode
}

export default function List({ children }: Props) {
  return <ul className="pl-6 flex mt-2 flex-col mb-2 gap-y-2">{children}</ul>
}
