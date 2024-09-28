import { Loader } from "./components"
import { ExampleCode } from "@modules/shared/modules/markdown/components/Markdown/components/Code/components"
import { Section } from "../../shared/components"

interface Props {
  loading: boolean
  response: string
}

export default function Response({ loading, response }: Props) {
  return (
    <Section title="Response">
      {loading && <Loader />}
      {!loading && <ExampleCode language="json" code={response} />}
    </Section>
  )
}
