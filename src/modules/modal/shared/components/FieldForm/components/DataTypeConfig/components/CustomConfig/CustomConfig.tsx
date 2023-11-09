import { UpdateCustomProps } from "@modules/modal/shared/interfaces"
import { CodeEditor } from "@modules/shared/modules/markdown/components"

interface Props {
  code: string
  handleUpdateCustomField: (p: UpdateCustomProps) => void
}

export default function CustomConfig({ code, handleUpdateCustomField }: Props) {
  function handleChangeCode(c: string) {
    handleUpdateCustomField({ code: c })
  }

  return (
    <div className="px-5 w-full max-w-[800px] flex bg-scale-12 dark:bg-scale-5 h-[350px] justify-center items-center">
      <div className="p-3 bg-scale-3 rounded code-playground">
        <CodeEditor height={300} onChange={handleChangeCode} code={code} language="javascript" />
      </div>
    </div>
  )
}
