import { Param } from "@markdown/components/Markdown/components/Params/domain"
import useParams from "./useParams"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useJavaParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY({
    es: "No será creado el archivo Main.java, solo los archivos con las clases de cada objeto encontrado",
    en: "The Main.java file will not be created, only the files with the classes of each object found",
  })

  const PACKAGE: Param = {
    name: "package",
    description: {
      es: "Nombre del paquete al que pertenecerán las clases",
      en: "Package name to which the classes will belong",
    },
    params: [],
    required: false,
    default: "chaca.data",
    types: [COMMON_TYPES.STRING],
  }

  return { DECLARATION, PACKAGE }
}
