import { Code } from "@markdown/components/Markdown/components"

export default function Error() {
  const code = `
{
    time: "2024-09-27T14:41:52Z",
    path: "/api/schema",
    error: "Too Many Requests",
    status: 429
}
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Error response structure", es: "Estructura del mensaje de error" }}
    />
  )
}
