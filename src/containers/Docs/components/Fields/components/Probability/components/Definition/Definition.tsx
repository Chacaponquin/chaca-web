import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.probability<T>(options: ProbabilityOption<T>[]): ProbabilityOption
`
  return <Code code={code} language="typescript" title="Probability field definition" />
}
