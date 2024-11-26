import { Param } from "@markdown/components/Markdown/components/Params/domain"
import useParams from "./useParams"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useJavaParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY(
    "No será creado el archivo Main.java, solo los archivos con las clases de cada objeto",
  )

  const PACKAGE: Param = {
    name: "package",
    description: "Nombre del paquete al que pertenecerán las clases",
    params: [],
    required: false,
    default: "chaca.data",
    types: [COMMON_TYPES.STRING],
  }

  return { DECLARATION, PACKAGE }
}
