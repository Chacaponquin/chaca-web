import useParams from "./useParams"

export default function useTsParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY("Solo serán definidas las interfaces de los objetos creados")

  return { DECLARATION }
}
