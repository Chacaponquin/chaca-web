import { Language } from "prism-react-renderer"
import { ExampleCode } from "./components"

interface Props {
  code: string
  className?: string
  language: Language
}

export default function Code({ code, language, className }: Props) {
  return <ExampleCode code={code} language={language} className={className} />
}
