import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark } from "@uiw/codemirror-themes-all"

interface Props {
  onChange(value: string): void
  height: number
  code: string
  language: string
}

export default function CodeEditor({ onChange, height, code }: Props) {
  return (
    <CodeMirror
      value={code}
      onChange={onChange}
      height={`${height}px`}
      extensions={[javascript()]}
      theme={vscodeDark}
      width="500px"
      className="bg-scale-9"
    />
  )
}
