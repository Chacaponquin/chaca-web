import React from "react"

interface Props {
  children: React.ReactNode
}

export default function H4({ children }: Props) {
  return <h4 className="text-sm text-white font-fontCodeMedium">{children}</h4>
}
