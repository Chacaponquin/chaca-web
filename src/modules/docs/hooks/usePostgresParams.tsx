import { Param } from "@markdown/components/Markdown/components/Params/domain"
import useParams from "./useParams"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { MiniCode } from "@markdown/components/Markdown/components"

export default function usePostgresParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY({
    es: "Solo serán definidas las tablas de cada objeto encontrado",
    en: "Only the tables for each object found will be defined",
  })

  const GENERATE_IDS: Param = {
    name: "generateIds",
    description: {
      es: (
        <>
          Genera de forma automática una columna <MiniCode>id</MiniCode> secuencial para las tablas
          a las que no se les ha definido una <MiniCode size="sm">PRIMARY KEY</MiniCode>
        </>
      ),
      en: (
        <>
          Automatically generates a sequential <MiniCode>id</MiniCode> column for tables that have
          not been defined with a <MiniCode size="sm">PRIMARY KEY</MiniCode>
        </>
      ),
    },
    params: [],
    required: false,
    default: "true",
    types: [COMMON_TYPES.BOOLEAN],
  }

  return { DECLARATION, GENERATE_IDS }
}
