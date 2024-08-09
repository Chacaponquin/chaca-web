import { DocSubSection } from "@modules/docs/domain/core/base"
import { Doc, Footer, Sections, SideBar } from "./components"

interface Props {
  location: string[]
  selected: DocSubSection
  children: React.ReactNode
}

export default function Content({ location, selected, children }: Props) {
  return (
    <div className="w-full flex dark:bg-scale-2">
      <SideBar selected={selected} />

      <main className="w-full flex overflow-y-auto z-40">
        <Doc location={location}>
          {children}
          <Footer back={selected.back} next={selected.next} />
        </Doc>
      </main>

      <Sections />
    </div>
  )
}
