import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.enum<R>(values: ReadonlyArray<R>): EnumField<R>
`

  return <Code code={code} language="typescript" title="Enum field definition" />
}
