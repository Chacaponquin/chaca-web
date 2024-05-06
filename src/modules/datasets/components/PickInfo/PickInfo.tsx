import { P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function PickInfo() {
  const { INFO, WRONG_HEADER, WRONG } = useTranslation({
    INFO: {
      en: "Selects a specific quantity from randomly defined values and returns an array with the selected values",
      es: "Selecciona una cantidad específica entre valores definidos de forma aleatoria y devuelve un arreglo con los valores seleccionados",
    },
    WRONG_HEADER: { en: "Wrong count", es: "Cantidad mal definida" },
    WRONG: {
      en: "You cannot choose more elements than the number of defined values",
      es: "No puedes elegir más elementos que la cantidad de valores definidos",
    },
  })

  return (
    <div className="flex flex-col gap-y-1">
      <TypeInfo header="Pick field" type="default">
        <P>{INFO}</P>
      </TypeInfo>

      <TypeInfo type="danger" header={WRONG_HEADER}>
        <P>{WRONG}</P>
      </TypeInfo>
    </div>
  )
}
