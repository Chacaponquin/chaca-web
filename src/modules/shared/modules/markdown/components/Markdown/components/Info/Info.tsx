import { Info as InfoIcon } from "@modules/app/modules/icon/components"
import { Card, CardTitle } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  children: React.ReactNode
}

export default function Info({ children }: Props) {
  const { TEXT } = useTranslation({ TEXT: { en: "Info", es: "Informacion" } })

  return (
    <Card color="purple">
      <CardTitle icon={InfoIcon} text={TEXT} />
      {children}
    </Card>
  )
}
