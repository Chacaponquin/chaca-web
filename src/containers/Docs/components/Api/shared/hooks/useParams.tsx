import { EXPORT_FORMATS } from "@modules/docs/domain/constants/export-formats"
import { MiniCode } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useParams() {
  function TYPE(t: string): Param {
    return {
      name: "type",
      description: { es: "Indica el tipo de campo", en: "Indicates the field type" },
      params: [],
      required: true,
      types: [`'${t}'`],
    }
  }

  const COUNT_PARAM: Param = {
    name: "count",
    description: { es: "Cantidad de documentos a crear", en: "Count of documents to create" },
    params: [],
    required: true,
    types: [COMMON_TYPES.NUMBER],
  }

  const FILENAME_PARAM: Param = {
    name: "filename",
    description: { es: "Nombre del archivo a generar", en: "Name of the generated file" },
    params: [],
    required: true,
    types: [COMMON_TYPES.STRING],
  }

  const FORMAT_PARAM: Param = {
    name: "format",
    description: {
      es: "Formato de archivo al que se transpilarán los datos generados",
      en: "File format which the generated data will be transpiled",
    },
    params: [],
    required: true,
    types: EXPORT_FORMATS,
  }

  const COMMON_PARAMS: Param[] = [
    {
      name: "isArray",
      description: {
        es: "Indica si el valor a retornar para el campo definido será en forma de arreglo",
        en: "Indicates if the field type returned value will be an array",
      },
      params: [
        {
          name: "min",
          description: {
            es: "Cantidad mínima de valores que van a generarse en el arreglo",
            en: "Minimum count of values to be generated in the array",
          },
          params: [],
          types: [COMMON_TYPES.NUMBER],
          required: false,
          default: "0",
        },
        {
          name: "max",
          description: {
            es: "Cantidad máxima de valores que van a generarse en el arreglo",
            en: "Maximum count of values to be generated in the array",
          },
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
      description: {
        es: (
          <>
            Probabilidad de que al generar un documento el campo tenga valor{" "}
            <MiniCode>null</MiniCode>
          </>
        ),
        en: (
          <>
            Probability that the field has a <MiniCode>null</MiniCode> value
          </>
        ),
      },
      params: [],
      required: false,
      types: [COMMON_TYPES.BOOLEAN, COMMON_TYPES.NUMBER],
    },
  ]

  return { TYPE, COMMON_PARAMS, COUNT_PARAM, FILENAME_PARAM, FORMAT_PARAM }
}
