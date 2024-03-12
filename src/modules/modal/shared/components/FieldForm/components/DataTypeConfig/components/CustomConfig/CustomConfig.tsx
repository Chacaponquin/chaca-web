import { UpdateCustomProps } from "@modules/modal/shared/interfaces"
import { CodeEditor } from "@modules/shared/modules/markdown/components"
import clsx from "clsx"

interface Props {
  code: string
  handleUpdateCustomField(p: UpdateCustomProps): void
}

export default function CustomConfig({ code, handleUpdateCustomField }: Props) {
  function handleChangeCode(code: string) {
    handleUpdateCustomField({ code: code })
  }

  const CLASS = clsx(
    "justify-center items-center flex",
    "w-full max-w-[800px]",
    "h-[350px]",
    "bg-scale-12 dark:bg-scale-5",
    "px-5",
  )

  return (
    <div className={CLASS}>
      <div className="p-3 bg-scale-3 rounded code-playground flex w-full">
        <CodeEditor height={300} onChange={handleChangeCode} code={code} language="javascript" />
      </div>
    </div>
  )
}
