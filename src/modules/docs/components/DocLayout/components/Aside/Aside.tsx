import { Sections } from "@containers/Docs/shared/components"
import { Header } from "./components"
import { DocSubSection } from "@modules/docs/domain/core/base"
import { Search } from "../../shared/components"

interface Props {
  open: boolean
  handleClose(): void
  selected: DocSubSection
  handleOpenSearch(): void
}

export default function Aside({ handleClose, open, selected, handleOpenSearch }: Props) {
  return (
    <div
      className="w-full h-screen bg-scale-4/70 fixed top-0 left-0 z-[999] pr-5"
      onClick={handleClose}
      style={{ display: open ? "flex" : "none" }}
    >
      <aside
        className="h-full flex flex-col w-full max-w-[400px] shadow-lg dark:bg-scale-4 bg-white overflow-y-auto px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Header handleClose={handleClose} />
        <Search handleClick={handleOpenSearch} full={true} className="mb-2 mt-2" />
        <Sections selected={selected} />
      </aside>
    </div>
  )
}
