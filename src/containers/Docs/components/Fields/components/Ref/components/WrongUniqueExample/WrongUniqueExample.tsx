import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function WrongUniqueExample() {
  const code = `
const dataset = chaca.dataset([
    {
        name: "User",
        documents: 2 // this will throw a NotEnoughValuesForRefError,
        schema: userSchema
    },
    {
        name: "Worker",
        documents: 3,
        schema: workerSchema
    }
])
`

  return <Code code={code} language="typescript" title="Wrong unique reference" />
}
