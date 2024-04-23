import React from "react"

interface Props {
  children: React.ReactNode
}

export default function ConfigContainer({ children }: Props) {
  return <div className="grid exsm:grid-cols-2 grid-cols-1 gap-y-2">{children}</div>
}
