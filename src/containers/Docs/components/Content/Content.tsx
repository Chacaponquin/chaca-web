import { Doc, SideBar } from "./components"
import { Fragment } from "react"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  content: string | null
}

export default function Content({ handleChangeSelectedDoc, selectedDoc, content }: Props) {
  return (
    <main className="w-full flex-grow flex">
      <SideBar handleChangeSelectedDoc={handleChangeSelectedDoc} selectedDoc={selectedDoc} />

      <div className="w-full flex h-full px-7">
        {content ? <Doc content={content} /> : <Fragment></Fragment>}
      </div>
    </main>
  )
}
