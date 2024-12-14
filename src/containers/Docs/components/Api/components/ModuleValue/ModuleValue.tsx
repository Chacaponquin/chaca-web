import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import En from "./translation/En"
import Es from "./translation/Es"

export default function ModuleValue() {
  const { CONTENT } = useTranslationComponent({ CONTENT: { en: <En />, es: <Es /> } })

  return CONTENT
}
