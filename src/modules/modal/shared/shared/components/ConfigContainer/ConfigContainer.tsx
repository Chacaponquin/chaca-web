import React from "react"

interface Props {
  children: React.ReactNode
}

export default function ConfigContainer({ children }: Props) {
  return <div className="grid grid-cols-2 gap-y-2">{children}</div>
}
