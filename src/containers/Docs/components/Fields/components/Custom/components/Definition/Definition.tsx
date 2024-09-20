import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
function generator({ currentFields, store } : CustomFieldProps) {
    // return a value
}
`

  return <Code code={code} language="typescript" title="" />
}
