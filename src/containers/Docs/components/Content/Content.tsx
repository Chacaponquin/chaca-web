import { Doc, Loading, SideBar } from "./components"
import { Fragment } from "react"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  content: string | null
  loading: boolean
}

export default function Content({ handleChangeSelectedDoc, selectedDoc, content, loading }: Props) {
  return (
    <main className="w-full flex-grow flex">
      <SideBar handleChangeSelectedDoc={handleChangeSelectedDoc} selectedDoc={selectedDoc} />

      <div className="w-full flex h-full px-7">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <Fragment>{content ? <Doc content={content} /> : <Fragment></Fragment>}</Fragment>
        )}
      </div>
    </main>
  )
}
