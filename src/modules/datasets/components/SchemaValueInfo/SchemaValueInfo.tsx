import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function SchemaValueInfo() {
  return (
    <TypeInfo header="Schema value field">
      <P>
        Retorna el valor de una de las funciones predefinidas en <MiniCode>Chaca</MiniCode>
      </P>
    </TypeInfo>
  )
}
