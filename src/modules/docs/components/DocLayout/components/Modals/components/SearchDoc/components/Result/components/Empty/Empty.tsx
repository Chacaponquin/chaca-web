import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  query: string
}

export default function Empty({ query }: Props) {
  const { TEXT, EMPTY } = useTranslation({
    TEXT: { en: `No results for "${query}"`, es: `No se encuentran resultados con "${query}"` },
    EMPTY: { en: "No results found", es: "No se encontraron resultados" },
  })

  return <section className="text-center text-base pt-6 pb-2">{query ? TEXT : EMPTY}</section>
}
