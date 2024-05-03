import { P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function PickInfo() {
  return (
    <div className="flex flex-col gap-y-1">
      <TypeInfo header="Pick field" type="default">
        <P>
          Selecciona una cantidad específica de valores definidos y devuelve un arreglo con los
          valores seleccionados
        </P>
      </TypeInfo>

      <TypeInfo type="danger" header="Wrong count">
        <P>No puedes elegir más elementos que la cantidad de valores definidos</P>
      </TypeInfo>
    </div>
  )
}
