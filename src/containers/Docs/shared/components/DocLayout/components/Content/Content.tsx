import { DocSubSection } from "@modules/docs/domain/core/base"
import { Doc, SideBar } from "./components"

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
        <Doc location={location}>{children}</Doc>
      </main>
    </div>
  )
}
