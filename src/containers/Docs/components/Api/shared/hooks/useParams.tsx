import { EXPORT_FORMATS } from "@modules/docs/domain/constants/export-formats"
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

  const COUNT_PARAM: Param = {
    name: "count",
    description: "Cantidad de documentos a crear",
    params: [],
    required: true,
    types: [COMMON_TYPES.NUMBER],
  }

  const FILENAME_PARAM: Param = {
    name: "filename",
    description: "Nombre del archivo a generar",
    params: [],
    required: true,
    types: [COMMON_TYPES.STRING],
  }

  const FORMAT_PARAM: Param = {
    name: "format",
    description: "Formato de archivo al que se transpilarán los datos generados",
    params: [],
    required: true,
    types: EXPORT_FORMATS,
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

  return { TYPE, COMMON_PARAMS, COUNT_PARAM, FILENAME_PARAM, FORMAT_PARAM }
}
