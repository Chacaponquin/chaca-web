import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Commands() {
  const NPM_CMD = "npm install chaca --dev"

  return (
    <div className="rounded w-full flex flex-col">
      <header></header>

      <Code language="bash" code={NPM_CMD} />
    </div>
  )
}
