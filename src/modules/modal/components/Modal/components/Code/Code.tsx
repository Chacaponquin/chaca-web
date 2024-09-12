import { useCode } from "@modules/modal/hooks"
import { CodeEditor } from "@modules/shared/modules/markdown/components"
import { Languages } from "@modules/shared/modules/markdown/domain"
import clsx from "clsx"

interface Props {
  language: Languages
}

export default function Code({ language }: Props) {
  const { code, handleChange } = useCode()

  const CLASS = clsx("flex justify-center items-center", "w-full", "mb-3")

  return (
    <div className={CLASS}>
      <div className="rounded code-playground flex w-full">
        <CodeEditor height={400} onChange={handleChange} code={code} language={language} />
      </div>
    </div>
  )
}
