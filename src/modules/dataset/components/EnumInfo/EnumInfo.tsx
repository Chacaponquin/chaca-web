import { P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function EnumInfo() {
  const { DANGER_HEADER, INFO, DANGER } = useTranslation({
    DANGER_HEADER: { en: "At least one element", es: "Al menos un elemento" },
    INFO: {
      en: "Returns one of all possible defined values",
      es: "Retorna uno de todos los posibles valores definidos",
    },
    DANGER: {
      en: "At least 1 value must be defined for it to be selected",
      es: "Se debe definir al menos 1 valor para que pueda ser seleccionado",
    },
  })

  return (
    <div className="flex flex-col">
      <TypeInfo type="default" header="Enum field">
        <P>{INFO}</P>
      </TypeInfo>

      <TypeInfo header={DANGER_HEADER} type="danger">
        <P>{DANGER}</P>
      </TypeInfo>
    </div>
  )
}
