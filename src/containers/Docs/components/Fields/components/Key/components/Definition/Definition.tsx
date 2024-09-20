import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.key(field: KeyFieldProps) => KeyField
`

  return <Code code={code} language="typescript" title="Key field declaration" />
}
