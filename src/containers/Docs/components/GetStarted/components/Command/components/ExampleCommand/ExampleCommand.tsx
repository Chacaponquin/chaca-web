import { Code } from "@markdown/components/Markdown/components"

const code = `
npx chaca json --filename user --output data --config scripts/users.js --count 10
`

export default function ExampleCommand() {
  return <Code code={code} language="bash" title="Command definition" />
}
