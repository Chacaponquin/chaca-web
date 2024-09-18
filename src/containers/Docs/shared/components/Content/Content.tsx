import { Markdown } from "@modules/shared/modules/markdown/components"
import { Doc, Footer, SideBar } from "./components"
import { useDocs } from "@modules/docs/hooks"
import { H1 } from "@modules/shared/modules/markdown/components/Markdown/components"

interface Props {
  children: React.ReactNode
}

export default function Content({ children }: Props) {
  const { selected } = useDocs()

  return (
    <div className="w-full flex dark:bg-scale-2">
      <SideBar selected={selected} />

      <main className="w-full flex justify-center overflow-y-auto z-40">
        <Doc>
          <Markdown>
            <H1>{selected.title}</H1>
            {children}
          </Markdown>

          <Footer back={selected.back} next={selected.next} />
        </Doc>
      </main>
    </div>
  )
}
