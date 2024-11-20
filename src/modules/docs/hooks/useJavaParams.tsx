import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import useParams from "./useParams"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function useJavaParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY(
    "No será creado el archivo Main.java, solo los archivos con las clases de cada objeto",
  )

  const PACKAGE: Param = {
    name: "package",
    description: "",
    params: [],
    required: false,
    default: "chaca.data",
    types: [COMMON_TYPES.STRING],
  }

  return { DECLARATION, PACKAGE }
}
