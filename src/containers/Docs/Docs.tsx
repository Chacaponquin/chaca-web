import { Layout } from "@containers/Layout/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Content, Navbar } from "./components"
import { useDocs } from "./hooks"

export default function Docs() {
  const { handleChangeSelectedDoc, selectedDoc, content, loading } = useDocs()

  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: { en: "Chaca Docs", es: "Chaca Docs" },
    DESCRIPTION: { en: "Chaca Docs", es: "Chaca Docs" },
  })

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content
          handleChangeSelectedDoc={handleChangeSelectedDoc}
          selectedDoc={selectedDoc}
          content={content}
          loading={loading}
        />
      </div>
    </Layout>
  )
}
