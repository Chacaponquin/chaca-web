import { UpdateCustomProps } from "@modules/modal/components/shared/interfaces/form.interfaces"
import CodeEditor from "@modules/shared/components/CodeEditor/CodeEditor"
import React from "react"

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
    <div className="px-5 w-full max-w-[800px] flex bg-gray-200 h-[200px] justify-center items-center">
      <div className="p-3 bg-darkColor rounded-sm code-container">
        <CodeEditor height={150} onChange={handleChangeCode} code={code} language="javascript" />
      </div>
    </div>
  )
}
