import React from "react"
import { Card, CardTitle } from "../../shared/components"
import { Danger as DangerIcon } from "@modules/app/modules/icon/components"

interface Props {
  children: React.ReactNode
  title: string
}

export default function Danger({ children, title }: Props) {
  return (
    <Card color="red">
      <CardTitle icon={DangerIcon} text={title} />
      {children}
    </Card>
  )
}
