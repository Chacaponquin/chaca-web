import { Markdown } from "@markdown/components"
import { Doc, Footer, SideBar } from "./components"
import { H1 } from "@markdown/components/Markdown/components"
import { DocSubSection } from "@modules/docs/domain/core/base"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  children: React.ReactNode
  selected: DocSubSection
}

export default function Content({ children, selected }: Props) {
  const { language } = useLanguage()

  return (
    <div className="w-full flex dark:bg-scale-2">
      <SideBar selected={selected} />

      <main className="w-full flex justify-center overflow-y-auto z-40">
        <Doc>
          <Markdown>
            <H1 id={selected.url}>{selected.title[language]}</H1>
            {children}
          </Markdown>

          <Footer back={selected.back} next={selected.next} />
        </Doc>
      </main>
    </div>
  )
}
