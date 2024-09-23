import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
{
    field({ currentFields, store } : CustomFieldProps): any
}
`

  return <Code code={code} language="typescript" title="" />
}
