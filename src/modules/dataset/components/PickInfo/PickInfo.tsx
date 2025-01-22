import { A, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { PICK } from "@modules/docs/domain/core/sections/field-types"

export default function PickInfo() {
  const { INFO, WRONG } = useTranslationComponent({
    INFO: {
      en: (
        <>
          Selects a specific quantity from randomly defined values and returns an array with the
          selected values. <A to={PICK.redirect}>Read about pick fields</A>
        </>
      ),
      es: (
        <>
          Selecciona una cantidad específica entre valores definidos de forma aleatoria y devuelve
          un arreglo con los valores seleccionados.{" "}
          <A to={PICK.redirect}>Leer sobre los campos pick</A>
        </>
      ),
    },
    WRONG: {
      en: "You cannot choose more elements than the number of defined values",
      es: "No puedes elegir más elementos que la cantidad de valores definidos",
    },
  })

  return (
    <div className="flex flex-col gap-y-1">
      <TypeInfo header={{ en: "Pick field", es: "Campo pick" }} type="default">
        <P>{INFO}</P>
      </TypeInfo>

      <TypeInfo type="danger" header={{ en: "Wrong count", es: "Cantidad mal definida" }}>
        <P>{WRONG}</P>
      </TypeInfo>
    </div>
  )
}
