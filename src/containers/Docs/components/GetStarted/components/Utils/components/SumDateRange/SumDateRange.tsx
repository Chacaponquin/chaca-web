import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { SUM_DATE_RANGE } from "@modules/docs/domain/core/sections/get-started/utils"
import { P } from "@markdown/components/Markdown/components"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SumDateRange() {
  const params: Param[] = [
    {
      name: "date",
      description: { es: "Fecha de referencia", en: "Reference date" },
      params: [],
      required: true,
      types: [COMMON_TYPES.DATE],
    },
    {
      name: "range",
      description: { es: "Unidad de tiempo", en: "Time unit" },
      params: [],
      required: true,
      types: [`"years"`, `"seconds"`, `"minutes"`, `"days"`, `"hours"`, `"months"`],
    },
    {
      name: "value",
      description: { es: "Cantidad de tiempo a añadir", en: "Amount of time to add" },
      params: [],
      required: true,
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return (
    <Method params={params} code={null} title={SUM_DATE_RANGE}>
      <P>Suma una cantidad específica de tiempo a una fecha.</P>
    </Method>
  )
}
