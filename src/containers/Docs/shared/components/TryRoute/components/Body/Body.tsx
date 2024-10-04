import { CodeEditor } from "@modules/shared/modules/markdown/components"
import { Section } from "../../shared/components"

interface Props {
  body: string
  handleChangeBody(v: string): void
}

export default function Body({ body, handleChangeBody }: Props) {
  return (
    <Section title="Body">
      <CodeEditor code={body} height={220} language="json" onChange={handleChangeBody} />
    </Section>
  )
}
