import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function SequenceInfo() {
  return (
    <TypeInfo header="Sequence field">
      <P>
        Genera un número que sigue una secuencia con respecto a los documentos previos del{" "}
        <MiniCode>Dataset</MiniCode>
      </P>
      <P>
        Por defecto la secuencia empieza por el número <MiniCode>1</MiniCode> con un paso de{" "}
        <MiniCode>1</MiniCode>
      </P>
    </TypeInfo>
  )
}
