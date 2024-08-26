import { ChacaButton } from "@form/components"
import { APP_ROUTES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Link } from "react-router-dom"

export default function Button() {
  const { BACK_TEXT } = useTranslation({
    BACK_TEXT: { en: "Go Back", es: "Volver" },
  })

  return (
    <Link to={APP_ROUTES.ROOT}>
      <ChacaButton size="xl" text={BACK_TEXT} color="secondary" />
    </Link>
  )
}
