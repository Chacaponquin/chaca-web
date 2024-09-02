import React from "react"
import { Link as RouterLink } from "react-router-dom"

interface Props {
  children: React.ReactNode
  to: string
}

export default function Link({ children, to }: Props) {
  return (
    <RouterLink to={to} className="hover:underline text-purple-5 hover:underline-offset-2">
      {children}
    </RouterLink>
  )
}
