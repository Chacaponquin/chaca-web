import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { Danger, P } from "@markdown/components/Markdown/components"
import { PICK } from "@modules/docs/domain/core/sections/get-started/utils"
import { COMMON_TYPES } from "@markdown/domain/constants"

const code = `
chaca.utils.pick({ values: [1, 2, 3, 4, 5], count: 2 }) // [2, 4]
chaca.utils.pick({ values: [1, 2, 3, 4, 5], count: 3 }) // [1, 5, 3]
`

export default function Pick() {
  const params: Param[] = [
    {
      name: "values",
      description: "Arraeglo de valores que pueden ser escogidos",
      params: [],
      required: true,
      types: ["any[]"],
    },
    {
      name: "count",
      description: "Cantidad de valores a escoger",
      params: [],
      required: true,
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return (
    <Method title={PICK} code={code} params={params}>
      <P>
        Elige una cantidad específica de valores de un arreglo evitando que los valores se repitan
        en el arreglo resultante.
      </P>

      <Danger title="Cantidad de valores a escoger">
        <P>
          La cantidad de valores a escoger no puede ser mayor a la longitud de arreglos a escoger.
        </P>
      </Danger>
    </Method>
  )
}
