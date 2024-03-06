import React from "react"

interface Props {
  children: React.ReactNode
}

export default function ConfigContainer({ children }: Props) {
  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-y-2">
      {children}
    </div>
  )
}
