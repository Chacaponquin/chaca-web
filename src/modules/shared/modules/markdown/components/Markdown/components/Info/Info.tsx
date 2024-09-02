import { Info as InfoIcon } from "@modules/app/modules/icon/components"
import { Card, CardTitle } from "../../shared/components"

interface Props {
  children: React.ReactNode
}

export default function Info({ children }: Props) {
  return (
    <Card color="purple">
      <CardTitle icon={InfoIcon} text="Info" />
      {children}
    </Card>
  )
}
