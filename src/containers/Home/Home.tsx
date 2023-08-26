import { CreationLoadingModal, DatasetPlayground, FieldsMenu } from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { LazyRoute } from "@modules/app/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { HomeNavbar, Layout } from "@containers/Layout/components"
import { useDatasetServices } from "@modules/datasets/services"
import { HomeContext, HomeProvider } from "./context"

const Home = () => {
  const { handleExportSelectedDataset, createDataLoading, handleAddNewField } = useHome()
  const { showFieldsMenu } = useDatasetServices()
  const { smallWindow } = useContext(HomeContext)

  const { HOME_DESCRIPTION } = useLanguage({
    HOME_DESCRIPTION: {
      en: "An interactive application so you can easily create your mock data to test or develop applications",
      es: "Una aplicación interactiva para que puedas crear fácilmente tu mock data para realizar tests o desarrollar aplicaciones",
    },
  })

  return (
    <LazyRoute>
      <HomeProvider>
        <Layout description={HOME_DESCRIPTION} title="Chaca | Home">
          <main className="flex flex-col w-full min-h-screen h-screen">
            <HomeNavbar />

            <section className="flex">
              {createDataLoading && <CreationLoadingModal />}

              {(!smallWindow || (smallWindow && showFieldsMenu)) && (
                <FieldsMenu
                  handleExportSelectedDataset={handleExportSelectedDataset}
                  handleAddNewField={handleAddNewField}
                />
              )}

              <DatasetPlayground handleCreateSelectDataset={handleExportSelectedDataset} />
            </section>
          </main>
        </Layout>
      </HomeProvider>
    </LazyRoute>
  )
}

export default Home
