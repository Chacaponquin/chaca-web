import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import En from "./translations/En"
import Es from "./translations/Es"

export default function TransformSchema() {
  const { CONTENT } = useTranslationComponent({ CONTENT: { en: <En />, es: <Es /> } })

  return CONTENT
}
