import { MiniCode } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function useParams() {
  function TYPE(t: string): Param {
    return {
      name: "type",
      description: "Indica el tipo de campo a definir",
      params: [],
      required: true,
      types: [`'${t}'`],
    }
  }

  const COMMON_PARAMS: Param[] = [
    {
      name: "isArray",
      description: "Indica si el valor a retornar para el campo definido será en forma de arreglo",
      params: [
        {
          name: "min",
          description: "Cantidad mínima de valores que van a generarse en el arreglo",
          params: [],
          types: [COMMON_TYPES.NUMBER],
          required: false,
          default: "0",
        },
        {
          name: "max",
          description: "Cantidad máxima de valores que van a generarse en el arreglo",
          params: [],
          types: [COMMON_TYPES.NUMBER],
          required: false,
          default: "10",
        },
      ],
      required: false,
      types: [COMMON_TYPES.NUMBER, "{ min: number, max: number }", COMMON_TYPES.BOOLEAN],
    },
    {
      name: "possibleNull",
      description: (
        <>
          Probabilidad de que al generar un documento el campo tenga valor <MiniCode>null</MiniCode>
        </>
      ),
      params: [],
      required: false,
      types: [COMMON_TYPES.BOOLEAN, COMMON_TYPES.NUMBER],
    },
  ]

  return { TYPE, COMMON_PARAMS }
}
