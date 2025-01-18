import { Layout } from "@containers/Layout/components"
import { Aside, Content, Modals, Navbar } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useLayout } from "./hooks"
import { Outlet } from "react-router-dom"

export default function DocLayout() {
  const { handleChangeOpenAside, openAside, handleOpenSearch, selected } = useLayout()
  const { language } = useLanguage()

  return (
    <Layout title={selected.titleSeo(language)} description={selected.descriptionSeo(language)}>
      <Modals />

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
