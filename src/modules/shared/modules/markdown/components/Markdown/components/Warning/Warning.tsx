import { Danger } from "@modules/app/modules/icon/components"
import { Card, CardTitle } from "../../shared/components"

interface Props {
  title: string
  children: React.ReactNode
}

export default function Warning({ title, children }: Props) {
  return (
    <Card color="yellow">
      <CardTitle icon={Danger} text={title} />
      {children}
    </Card>
  )
}
