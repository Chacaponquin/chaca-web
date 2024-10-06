import { ChacaButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleClick(): void
  loading: boolean
}

export default function Button({ handleClick, loading }: Props) {
  const { TEXT } = useTranslation({ TEXT: { en: "Try it", es: "Probar" } })

  return (
    <ChacaButton onClick={handleClick} color="primary" size="sm" text={TEXT} disabled={loading} />
  )
}
