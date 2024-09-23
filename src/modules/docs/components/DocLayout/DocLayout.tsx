import { Layout } from "@containers/Layout/components"
import { Aside, Content, Navbar } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useLayout } from "./hooks"
import { Outlet } from "react-router-dom"

export default function DocLayout() {
  const { handleChangeOpenAside, openAside, handleOpenSearch, selected } = useLayout()

  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: {
      en: "Explore our guides and examples to integrate Chaca.",
      es: "Explora nuestras guías y ejemplos para integrar Chaca.",
    },
  })

  return (
    <Layout title={selected.titleSeo} description={DESCRIPTION}>
      <Aside
        handleOpenSearch={handleOpenSearch}
        handleClose={handleChangeOpenAside}
        open={openAside}
        selected={selected}
      />

      <div className="w-full flex flex-col">
        <Navbar handleChangeOpenAside={handleChangeOpenAside} handleOpenSearch={handleOpenSearch} />

        <Content selected={selected}>
          <Outlet />
        </Content>
      </div>
    </Layout>
  )
}
