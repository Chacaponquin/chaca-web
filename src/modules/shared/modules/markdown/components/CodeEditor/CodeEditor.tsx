import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { json } from "@codemirror/lang-json"
import { LanguageSupport } from "@codemirror/language"
import { vscodeDark } from "@uiw/codemirror-themes-all"
import { Languages } from "../../domain"

interface Props {
  onChange(value: string): void
  height: number
  code: string
  language: Languages
}

export default function CodeEditor({ onChange, height, code, language }: Props) {
  function filter(): LanguageSupport {
    if (language === "javascript") {
      return javascript()
    } else {
      return json()
    }
  }

  return (
    <CodeMirror
      value={code}
      onChange={onChange}
      height={`${height}px`}
      extensions={[filter()]}
      theme={vscodeDark}
      className="flex w-full code-playground"
      width="100%"
    />
  )
}
