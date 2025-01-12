import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { Danger, P } from "@markdown/components/Markdown/components"
import { PICK } from "@modules/docs/domain/core/sections/get-started/utils"
import { COMMON_TYPES } from "@markdown/domain/constants"

const code = `
chaca.utils.pick({ values: [1, 2, 3, 4, 5], count: 2 }) // [2, 4]
chaca.utils.pick({ values: [1, 2, 3, 4, 5], count: 3 }) // [1, 5, 3]
`

const params: Param[] = [
  {
    name: "values",
    description: {
      es: "Arreglo de valores que pueden ser escogidos",
      en: "Array of values that can be chosen",
    },
    params: [],
    required: true,
    types: ["any[]"],
  },
  {
    name: "count",
    description: { es: "Cantidad de valores a escoger", en: "Count of values to choose" },
    params: [],
    required: true,
    types: [COMMON_TYPES.NUMBER],
  },
]

export default function Pick() {
  return (
    <Method title={PICK} code={code} params={params}>
      <P>
        Elige una cantidad específica de valores de un arreglo evitando que los valores se repitan
        en el arreglo resultante.
      </P>

      <Danger title="Cantidad de valores a escoger">
        <P>La cantidad de valores a escoger no puede ser mayor a la longitud del arreglo.</P>
      </Danger>
    </Method>
  )
}
