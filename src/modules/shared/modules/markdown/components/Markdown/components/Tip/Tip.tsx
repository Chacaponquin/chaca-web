import React from "react"
import { Card, CardTitle } from "../../shared/components"
import { Tip as TipIcon } from "@modules/app/modules/icon/components"

interface Props {
  children: React.ReactNode
  title: string
}

export default function Tip({ children, title }: Props) {
  return (
    <Card color="green">
      <CardTitle icon={TipIcon} text={title} />
      {children}
    </Card>
  )
}
