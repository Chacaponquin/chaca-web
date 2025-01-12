import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.probability<T>(options: ProbabilityOption<T>[]): ProbabilityOption
`
  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Probability field definition", es: "Definición del campo probability" }}
    />
  )
}
