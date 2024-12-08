import { Code } from "@markdown/components/Markdown/components"

const code = `
npx chaca [command] --help 
`

export default function HelpExample() {
  return <Code code={code} language="bash" title="Export command help" />
}
