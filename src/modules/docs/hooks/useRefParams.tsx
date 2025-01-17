import { Link, MiniCode } from "@modules/shared/modules/markdown/components/Markdown/components"
import { DATASET } from "../domain/core/sections/concepts"

const UNIQUE_PARAM_DESCRIPTION = {
  es: "El valor escogido no puede ser escogido por más de 1 documento",
  en: "The chosen value cannot be chosen by more than 1 document",
}

export default function useRefParams() {
  const FIELD_PARAM_DESCRIPTION = {
    es: (
      <>
        Ruta del campo a referenciar dentro del <Link to={DATASET.redirect}>dataset</Link>.
        Separando con <MiniCode size="sm">.</MiniCode> el nivel de anidación del campo. Por ejemplo:{" "}
        <MiniCode size="sm">User.id</MiniCode>
      </>
    ),
    en: (
      <>
        Path of the field to reference on the <Link to={DATASET.redirect}>dataset</Link>. Separating
        the field nesting level with <MiniCode size="sm">.</MiniCode>. For example:{" "}
        <MiniCode size="sm">User.id</MiniCode>
      </>
    ),
  }

  return { UNIQUE_PARAM_DESCRIPTION, FIELD_PARAM_DESCRIPTION }
}
