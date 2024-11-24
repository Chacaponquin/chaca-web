import { useState } from "react"
import { Section } from "./components"
import { CodeSection } from "./domain"
import { ExampleCode } from "../Code/components"
import { Copy } from "../../shared/components"

interface Props {
  sections: CodeSection[]
  loading?: boolean
}

export default function CodesCard({ sections }: Props) {
  const [open, setOpen] = useState<CodeSection>(sections[0])

  return (
    <div className="rounded w-full flex flex-col border-[1px] border-scale-7 my-3">
      <header className="flex justify-between px-4 items-center dark:bg-scale-2 rounded-t">
        <div className="flex items-center gap-x-3">
          {sections.map((s, index) => (
            <Section
              key={index}
              title={s.title}
              handleClick={() => setOpen(s)}
              selected={s === open}
            />
          ))}
        </div>

        <Copy code={open.code} />
      </header>

      <ExampleCode language={open.language} code={open.code} />
    </div>
  )
}
