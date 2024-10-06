import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { SUM_DATE_RANGE } from "@modules/docs/domain/core/sections/get-started/utils"
import { P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function SumDateRange() {
  const params: Param[] = [
    {
      name: "date",
      description: "Fecha de referencia",
      params: [],
      required: true,
      types: [COMMON_TYPES.DATE],
    },
    {
      name: "range",
      description: "Unidad de tiempo",
      params: [],
      required: true,
      types: [`"years"`, `"seconds"`, `"minutes"`, `"days"`, `"hours"`, `"months"`],
    },
    {
      name: "value",
      description: "Cantidad de tiempo a sumar",
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
