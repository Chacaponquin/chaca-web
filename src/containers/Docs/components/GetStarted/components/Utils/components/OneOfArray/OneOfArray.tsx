import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { ONE_OF_ARRAY } from "@modules/docs/domain/core/sections/get-started/utils"
import { P } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
chaca.utils.oneOfArray([1, 2, 3, 5, 4]) // 3
chaca.utils.oneOfArray(['Hi!!!', 'Chaca the best!!!', 10]) // 'Chaca the best!!!'
`

export default function OneOfArray() {
  const params: Param[] = [
    {
      name: "array",
      description: "Arreglo de valores que pueden ser seleccionados",
      params: [],
      required: true,
      types: ["Array"],
    },
  ]

  return (
    <Method title={ONE_OF_ARRAY} params={params} code={code}>
      <P>Elige un valor del arreglo de forma aleatoria y lo devuelve.</P>
    </Method>
  )
}
