import useParams from "./useParams"

export default function usePythonParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY("Solo serán declaradas las clases de cada objeto")

  return { DECLARATION }
}
