/* eslint-disable @typescript-eslint/no-explicit-any */

import Editor from "@monaco-editor/react"
import { LoaderContainer } from "../Loader"

export default function CodeEditor({
  onChange,
  height,
  fontSize,
  code,
  language,
}: {
  onChange: (value: string) => void
  height?: number
  fontSize: number
  code: string
  language: string
}) {
  function setEditorTheme(monaco: any) {
    monaco.editor.defineTheme("onedark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#282c34",
      },
    })
  }

  return (
    <Editor
      height={height ? `${height}px` : "100%"}
      options={{
        minimap: { enabled: false },
        fontSize: fontSize,
        glyphMargin: false,
        folding: false,
      }}
      width={"100%"}
      onChange={(value) => onChange(value || "")}
      className='code-container custom-form-playground pt-2'
      language={language}
      defaultValue={code}
      onMount={(editor, monaco) => {
        monaco.editor.setTheme("onedark")
      }}
      beforeMount={setEditorTheme}
      loading={<LoaderContainer size={90} loading={true} color={"white"} />}
    />
  )
}
