import { Layout } from "@containers/Layout/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Content, Navbar } from "./components"
import { useDocs } from "./hooks"

export default function Docs() {
  const { handleChangeSelectedDoc, selectedDoc, content, loading, docs } = useDocs()

  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: { en: "Chaca | Docs", es: "Chaca | Docs" },
    DESCRIPTION: { en: "Chaca Docs", es: "Chaca Docs" },
  })

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="h-screen w-full flex flex-col dark:bg-scale-2 fixed top-0 left-0 overflow-auto">
        <Navbar />
        <Content
          handleChangeSelectedDoc={handleChangeSelectedDoc}
          selectedDoc={selectedDoc}
          content={content}
          loading={loading}
          docs={docs}
        />
      </div>
    </Layout>
  )
}
