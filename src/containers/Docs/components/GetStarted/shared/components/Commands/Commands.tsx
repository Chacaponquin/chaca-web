import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

const NPM_CMD = "npm install chaca -D"
const YARN_CMD = "yarn add chaca --dev"

const sections: CodeSection[] = [
  { code: NPM_CMD, title: { es: "npm", en: "npm" }, language: "bash" },
  { code: YARN_CMD, title: { es: "yarn", en: "yarn" }, language: "bash" },
]

export default function Commands() {
  return <CodesCard sections={sections} />
}
