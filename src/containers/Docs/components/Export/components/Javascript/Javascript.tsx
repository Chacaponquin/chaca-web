import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { DatasetResult, Header } from "../../shared/components"
import { Definition, JsParams } from "./components"
import En from "./translations/En"
import Es from "./translations/Es"

export default function Javascript() {
  useTranslationComponent({ CONTENT: { en: <En />, es: <Es /> } })

  return (
    <>
      <Header extension="js" format="javascript" />
      <JsParams />
      <Definition />
      <DatasetResult extension="javascript" language="javascript" />
    </>
  )
}
