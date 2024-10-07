import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
npx chaca export-json --help 
`

export default function HelpExample() {
  return <Code code={code} language="bash" title="Export command help" />
}
