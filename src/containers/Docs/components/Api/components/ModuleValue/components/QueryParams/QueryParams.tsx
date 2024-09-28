import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function QueryParams() {
  const params: Param[] = [
    {
      name: "section",
      description: "Nombre de la sección en la que se encuentra el módulo a elegir",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "module",
      description: "Módulo del cual se generará el valor",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return <Params params={params} />
}
