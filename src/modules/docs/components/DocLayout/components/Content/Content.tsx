import { Markdown } from "@modules/shared/modules/markdown/components"
import { Doc, Footer, SideBar } from "./components"
import { H1 } from "@modules/shared/modules/markdown/components/Markdown/components"
import { DocSubSection } from "@modules/docs/domain/core/base"

interface Props {
  children: React.ReactNode
  selected: DocSubSection
}

export default function Content({ children, selected }: Props) {
  return (
    <div className="w-full flex dark:bg-scale-2">
      <SideBar selected={selected} />

      <main className="w-full flex justify-center overflow-y-auto z-40">
        <Doc>
          <Markdown>
            <H1 id={selected.url}>{selected.title}</H1>
            {children}
          </Markdown>

          <Footer back={selected.back} next={selected.next} />
        </Doc>
      </main>
    </div>
  )
}
