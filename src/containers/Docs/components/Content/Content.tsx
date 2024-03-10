import { Doc, Loading, NotFound, SideBar } from "./components"
import { Fragment } from "react"
import { SelectedDoc } from "@containers/Docs/interfaces"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  content: string | null
  loading: boolean
  docLocation: Array<string>
}

export default function Content({
  handleChangeSelectedDoc,
  selectedDoc,
  content,
  loading,
  docLocation,
}: Props) {
  return (
    <div className="w-full flex dark:bg-scale-2">
      <SideBar handleChangeSelectedDoc={handleChangeSelectedDoc} selectedDoc={selectedDoc} />

      <main className="w-full flex overflow-y-auto z-40">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {content ? <Doc content={content} location={docLocation} /> : <NotFound />}
          </Fragment>
        )}
      </main>
    </div>
  )
}
