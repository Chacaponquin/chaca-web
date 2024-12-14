import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import Es from "./translations/Es"
import En from "./translations/En"

export default function SchemaObject() {
  const { CONTENT } = useTranslationComponent({ CONTENT: { es: <Es />, en: <En /> } })

  return CONTENT
}
