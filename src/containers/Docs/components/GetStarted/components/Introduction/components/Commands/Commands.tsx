import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"
import { useMemo, useState } from "react"
import { Copy, Section } from "./components"

interface ISection {
  code: string
  title: string
}

export default function Commands() {
  const NPM_CMD = "npm install chaca -D"
  const YARN_CMD = "yarn add chaca --dev"

  const sections: ISection[] = useMemo(() => {
    return [
      { code: NPM_CMD, title: "npm" },
      { code: YARN_CMD, title: "yarn" },
    ]
  }, [])

  const [open, setOpen] = useState<ISection>(sections[0])

  function handleCopy() {}

  return (
    <div className="rounded w-full flex flex-col border-[1px] border-scale-7 mt-4">
      <header className="flex justify-between px-4 items-center">
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

        <Copy handleClick={handleCopy} />
      </header>

      <Code language="bash" code={open.code} />
    </div>
  )
}
