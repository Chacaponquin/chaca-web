import {
  ContentLoader,
  CreationLoadingModal,
  DatasetPlayground,
  FieldsMenu,
  HomeLayout,
  Navbar,
  NoDatasetsMessage,
} from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { HomeContext } from "./context"

export default function Home() {
  const { smallWindow, createDataLoading } = useContext(HomeContext)

  const {
    handleExportSelectedDataset,
    handleAddNewField,
    handleCreateAllDatasets,
    datasets,
    showFieldsMenu,
    handleExportImage,
    handleDeleteAll,
  } = useHome()

  const showMenu = !smallWindow || (smallWindow && showFieldsMenu)

  return (
    <HomeLayout>
      <Navbar
        handleExportAllDatasets={handleCreateAllDatasets}
        handleExportImage={handleExportImage}
        handleDeleteAll={handleDeleteAll}
      />

      <ContentLoader />

      {datasets.length === 0 && <NoDatasetsMessage />}

      {datasets.length > 0 && (
        <main className="flex flex-grow">
          {createDataLoading && <CreationLoadingModal />}

          {showMenu && (
            <FieldsMenu
              handleExportSelectedDataset={handleExportSelectedDataset}
              handleAddNewField={handleAddNewField}
            />
          )}

          <DatasetPlayground />
        </main>
      )}
    </HomeLayout>
  )
}
