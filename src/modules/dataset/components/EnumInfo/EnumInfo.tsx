import { A, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { ENUM } from "@modules/docs/domain/core/sections/field-types"

export default function EnumInfo() {
  const { INFO, DANGER } = useTranslationComponent({
    INFO: {
      en: (
        <>
          Returns one of all possible defined values.{" "}
          <A to={ENUM.redirect}>Read about enum fields</A>
        </>
      ),
      es: (
        <>
          Retorna uno de todos los posibles valores definidos.{" "}
          <A to={ENUM.redirect}>Leer sobre los campos enum</A>
        </>
      ),
    },
    DANGER: {
      en: "At least 1 value must be defined for it to be selected",
      es: "Se debe definir al menos 1 valor para que pueda ser seleccionado",
    },
  })

  return (
    <div className="flex flex-col">
      <TypeInfo type="default" header={{ en: "Enum field", es: "Campo enum" }}>
        <P>{INFO}</P>
      </TypeInfo>

      <TypeInfo header={{ en: "At least one element", es: "Al menos un elemento" }} type="danger">
        <P>{DANGER}</P>
      </TypeInfo>
    </div>
  )
}
