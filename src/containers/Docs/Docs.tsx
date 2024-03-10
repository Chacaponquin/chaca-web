import { Layout } from "@containers/Layout/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Aside, Content, Navbar } from "./components"
import { useDocs } from "./hooks"

export default function Docs() {
  const {
    handleChangeSelectedDoc,
    selectedDoc,
    content,
    loading,
    docLocation,
    handleChangeOpenAside,
    openAside,
  } = useDocs()

  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: { en: "Chaca | Docs", es: "Chaca | Docs" },
    DESCRIPTION: {
      en: "Explore our guides and examples to integrate Chaca.",
      es: "Explora nuestras guías y ejemplos para integrar Chaca.",
    },
  })

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Aside
        handleClose={handleChangeOpenAside}
        open={openAside}
        handleChangeSelectedDoc={handleChangeSelectedDoc}
        selectedDoc={selectedDoc}
      />

      <div className="w-full flex flex-col">
        <Navbar handleChangeOpenAside={handleChangeOpenAside} />
        <Content
          handleChangeSelectedDoc={handleChangeSelectedDoc}
          selectedDoc={selectedDoc}
          content={content}
          loading={loading}
          docLocation={docLocation}
        />
      </div>
    </Layout>
  )
}
