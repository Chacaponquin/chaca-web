import { Language } from "prism-react-renderer"
import { ExampleCode } from "./components"
import { Copy } from "../../shared/components"

interface Props {
  code: string
  language: Language
  title: string
}

export default function Code({ code, language, title }: Props) {
  return (
    <div className="w-full flex flex-col relative my-4 border-[1px] border-scale-7 rounded">
      <header className="flex items-center rounded-t w-full justify-between py-2.5 px-4 border-b-[1px] border-b-scale-7 dark:bg-scale-2">
        <p className="text-sm text-scale-11">{title}</p>

        <Copy code={code} />
      </header>

      <ExampleCode code={code} language={language} className="" rounded={false} />
    </div>
  )
}
