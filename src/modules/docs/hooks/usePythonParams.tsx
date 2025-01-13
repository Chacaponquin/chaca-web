import useParams from "./useParams"

export default function usePythonParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY({
    es: "Solo serán declaradas las clases de cada objeto",
    en: "Only the classes of each object will be declared",
  })

  return { DECLARATION }
}
