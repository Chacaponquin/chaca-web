import { P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function PickInfo() {
  return (
    <TypeInfo header="Pick info">
      <P>
        Selecciona una cantidad específica de valores definidos y devuelve un arreglo con los
        valores seleccionados
      </P>
    </TypeInfo>
  )
}
