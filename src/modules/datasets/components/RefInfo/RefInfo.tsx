import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function RefInfo() {
  return (
    <TypeInfo type="default" header="Reference field">
      <P>
        Referencia a un campo <MiniCode>key</MiniCode> de otro <MiniCode>Dataset</MiniCode> y
        obtiene el valor de ese campo en cualquiera de los documentos generados
      </P>
      <P>
        Similar a una <MiniCode>FOREIGN KEY</MiniCode> en SQL
      </P>
    </TypeInfo>
  )
}
