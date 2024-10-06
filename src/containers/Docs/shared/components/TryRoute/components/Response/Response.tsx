import { Loader, ResponseImage, ResponseVideo } from "./components"
import { ExampleCode } from "@modules/shared/modules/markdown/components/Markdown/components/Code/components"
import { Section } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { TryResult } from "../../domain"

interface Props {
  loading: boolean
  response: string
  result: TryResult
}

export default function Response({ loading, response, result }: Props) {
  const { LABEL } = useTranslation({ LABEL: { en: "Response", es: "Respuesta" } })

  return (
    <Section title={LABEL}>
      {loading && <Loader />}
      {!loading && result === "json" && <ExampleCode language="json" code={response} />}
      {!loading && result === "image" && <ResponseImage image={response} />}
      {!loading && result === "video" && <ResponseVideo response={response} />}
    </Section>
  )
}
