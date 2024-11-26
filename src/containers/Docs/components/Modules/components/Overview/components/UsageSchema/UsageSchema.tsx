import { Code } from "@markdown/components/Markdown/components"

const code = `
import { modules } from "chaca"

const schema = chaca.schema({
    username: () => modules.internet.username()
})
`

export default function UsageSchema() {
  return <Code code={code} language="typescript" title="Modules usage on schema" />
}
