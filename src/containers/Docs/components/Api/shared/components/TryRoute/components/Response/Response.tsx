import { Loader } from "./components"
import { ExampleCode } from "@modules/shared/modules/markdown/components/Markdown/components/Code/components"
import { Section } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  loading: boolean
  response: string
}

export default function Response({ loading, response }: Props) {
  const { LABEL } = useTranslation({ LABEL: { en: "Response", es: "Respuesta" } })

  return (
    <Section title={LABEL}>
      {loading && <Loader />}
      {!loading && <ExampleCode language="json" code={response} manual />}
    </Section>
  )
}
