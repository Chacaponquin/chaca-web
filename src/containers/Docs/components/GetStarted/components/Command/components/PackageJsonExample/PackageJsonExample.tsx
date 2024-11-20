import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
{
    "type": "commonjs"
}
`

export default function PackageJsonExample() {
  return <Code code={code} language="json" title="package.json" />
}
