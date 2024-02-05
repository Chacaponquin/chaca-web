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
    <main className="w-full flex-grow flex">
      <SideBar
        handleChangeSelectedDoc={handleChangeSelectedDoc}
        selectedDoc={selectedDoc}
        docs={docs}
      />

      <div className="w-full flex h-full px-7 overflow-y-auto">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <Fragment>
            {content ? <Doc content={content} location={docLocation} /> : <NotFound />}
          </Fragment>
        )}
      </div>
    </main>
  )
}
