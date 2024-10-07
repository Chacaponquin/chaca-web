import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
chaca [command] [...options]
`

export default function RunExample() {
  return <Code code={code} language="bash" title="Run example" />
}
