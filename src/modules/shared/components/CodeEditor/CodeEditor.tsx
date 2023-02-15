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
  height: number
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
      height={`${height}px`}
      options={{
        minimap: { enabled: false },
        fontSize: fontSize,
        glyphMargin: false,
        folding: false,
      }}
      width={"100%"}
      onChange={(value) => onChange(value || "")}
      className='code-container w-full'
      language={language}
      defaultValue={code}
      onMount={(editor, monaco) => {
        monaco.editor.setTheme("onedark")
      }}
      beforeMount={setEditorTheme}
      loading={<LoaderContainer className={"w-[100px] esm:w-[60px]"} loading={true} />}
    />
  )
}
