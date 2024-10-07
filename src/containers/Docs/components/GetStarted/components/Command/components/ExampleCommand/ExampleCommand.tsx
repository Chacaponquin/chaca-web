import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
npx chaca export-json --filename user --output data --config modules/user.js --count 10
`

export default function ExampleCommand() {
  return <Code code={code} language="bash" title="Command definition" />
}
