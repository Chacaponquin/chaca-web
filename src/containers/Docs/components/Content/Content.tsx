import { Doc, Loading, NotFound, SideBar } from "./components"
import { Fragment } from "react"
import { SelectedDoc } from "@containers/Docs/interfaces"
import { DocSection } from "@modules/docs/domain"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
  content: string | null
  loading: boolean
  docs: Array<DocSection>
  docLocation: Array<string>
}

export default function Content({
  handleChangeSelectedDoc,
  selectedDoc,
  content,
  loading,
  docs,
  docLocation,
}: Props) {
  return (
    <div className="w-full flex dark:bg-scale-2">
      <SideBar
        handleChangeSelectedDoc={handleChangeSelectedDoc}
        selectedDoc={selectedDoc}
        docs={docs}
      />

      <main className="w-full flex overflow-y-auto z-40">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <Fragment>
            {content ? <Doc content={content} location={docLocation} /> : <NotFound />}
          </Fragment>
        )}
      </main>
    </div>
  )
}
