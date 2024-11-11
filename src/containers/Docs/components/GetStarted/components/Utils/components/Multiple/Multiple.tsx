import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { MULTIPLE } from "@modules/docs/domain/core/sections/get-started/utils"
import { P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

const code = `
chaca.utils.multiple({ generator: () => modules.person.firstName(), count: 3 }) // [ 'Aniya', 'Norval', 'Dallin' ]
chaca.utils.multiple({ generator: () => modules.person.firstName(), count: 3 }) // [ 'Santos', 'Lavinia', 'Lavinia' ]
chaca.utils.multiple({ generator: (i) => 'element-' + i, count: 3 }) // [ 'element-0', 'element-1', 'element-2' ]
`

export default function Multiple() {
  const params: Param[] = [
    {
      name: "generator",
      description: "Función que genera el valor en cada una de las iteraciones",
      params: [],
      required: true,
      types: ["(index: number) => any"],
    },
    {
      name: "count",
      description: "Cantidad de valores a generar",
      params: [],
      required: true,
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return (
    <Method title={MULTIPLE} code={code} params={params}>
      <P>Genera un arreglo de valores a partir de una función generadora.</P>
    </Method>
  )
}
