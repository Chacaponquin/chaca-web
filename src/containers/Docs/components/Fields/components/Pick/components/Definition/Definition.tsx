import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.pick<V>(props: PickFieldProps) => PickField<V>
`

  return <Code code={code} language="typescript" title="Pick field definition" />
}
