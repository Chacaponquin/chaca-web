import { Layout } from "@containers/Layout/components"
import { Aside, Content, Navbar } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useLayout } from "./hooks"
import { DocSubSection } from "@modules/docs/domain/core/base"

interface Props {
  selected: DocSubSection
  children: React.ReactNode
}

export default function DocLayout({ selected, children }: Props) {
  const { handleChangeOpenAside, openAside, location, handleOpenSearch } = useLayout({
    selected: selected,
  })

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
        handleOpenSearch={handleOpenSearch}
        handleClose={handleChangeOpenAside}
        open={openAside}
        selected={selected}
      />

      <div className="w-full flex flex-col">
        <Navbar handleChangeOpenAside={handleChangeOpenAside} handleOpenSearch={handleOpenSearch} />

        <Content selected={selected} location={location}>
          {children}
        </Content>
      </div>
    </Layout>
  )
}
