import { UpdateCustomProps } from "@modules/modal/shared/interfaces"
import { CodeEditor } from "@modules/shared/modules/markdown/components"

export default function CustomConfig({
  code,
  handleUpdateCustomField,
}: {
  code: string
  handleUpdateCustomField: (p: UpdateCustomProps) => void
}) {
  function handleChangeCode(c: string) {
    handleUpdateCustomField({ code: c })
  }

  return (
    <div className="px-5 w-full max-w-[800px] flex bg-gray-200 h-[350px] justify-center items-center">
      <div className="p-3 bg-scale-9 rounded-sm code-playground">
        <CodeEditor height={300} onChange={handleChangeCode} code={code} language="javascript" />
      </div>
    </div>
  )
}
