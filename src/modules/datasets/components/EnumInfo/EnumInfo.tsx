import { P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function EnumInfo() {
  return (
    <div className="flex flex-col gap-y-1">
      <TypeInfo type="default" header="Enum field">
        <P>Retorna uno de todos los posibles valores definidos</P>
      </TypeInfo>

      <TypeInfo header="Al menos un elemento" type="danger">
        <P>Se debe definir al menos 1 valor para que pueda ser seleccionado</P>
      </TypeInfo>
    </div>
  )
}
