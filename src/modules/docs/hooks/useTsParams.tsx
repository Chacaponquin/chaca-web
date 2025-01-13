import useParams from "./useParams"

export default function useTsParams() {
  const { DECLARATION_ONLY } = useParams()

  const DECLARATION = DECLARATION_ONLY({
    es: "Solo serán definidas las interfaces de los objetos creados",
    en: "Only the interfaces of the created objects will be defined",
  })

  return { DECLARATION }
}
