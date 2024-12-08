import { Param } from "@markdown/components/Markdown/components/Params/domain"
import useParams from "./useParams"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { MiniCode } from "@markdown/components/Markdown/components"

export default function usePostgresParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY("Solo serán definidas las tablas de cada objeto encontrado")

  const GENERATE_IDS: Param = {
    name: "generateIds",
    description: (
      <>
        Genera de forma automática una columna <MiniCode>id</MiniCode> secuencial para las tablas a
        las que no se les ha definido una <MiniCode size="sm">PRIMARY KEY</MiniCode>
      </>
    ),
    params: [],
    required: false,
    default: "true",
    types: [COMMON_TYPES.BOOLEAN],
  }

  return { DECLARATION, GENERATE_IDS }
}
