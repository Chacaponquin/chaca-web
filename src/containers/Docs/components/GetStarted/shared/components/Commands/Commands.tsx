import { CodesCard } from "@modules/shared/modules/markdown/components/Markdown/components"
import { useMemo } from "react"
import { CodeSection } from "@modules/shared/modules/markdown/components/Markdown/components/CodesCard/domain"

export default function Commands() {
  const NPM_CMD = "npm install chaca -D"
  const YARN_CMD = "yarn add chaca --dev"

  const sections: CodeSection[] = useMemo(() => {
    return [
      { code: NPM_CMD, title: "npm", language: "bash" },
      { code: YARN_CMD, title: "yarn", language: "bash" },
    ]
  }, [])

  return <CodesCard sections={sections} />
}
