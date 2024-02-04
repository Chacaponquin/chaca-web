import { DocSubSection } from "@modules/docs/interfaces"
import { Doc, SideBar } from "./components"
import { Fragment } from "react"

interface Props {
  handleChangeSelectedDoc(section: DocSubSection): void
  selectedDoc: DocSubSection | null
}

export default function Content({ handleChangeSelectedDoc, selectedDoc }: Props) {
  return (
    <main className="w-full flex-grow flex">
      <SideBar handleChangeSelectedDoc={handleChangeSelectedDoc} selectedDoc={selectedDoc} />

      <div className="w-full flex h-full">{selectedDoc ? <Doc /> : <Fragment></Fragment>}</div>
    </main>
  )
}
