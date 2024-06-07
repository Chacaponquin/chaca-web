import {
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
    loading,
  } = useHome()

  const showMenu = !smallWindow || (smallWindow && showFieldsMenu)

  return (
    <HomeLayout>
      <Navbar
        handleExportAllDatasets={handleCreateAllDatasets}
        handleExportImage={handleExportImage}
        handleDeleteAll={handleDeleteAll}
        loading={loading}
      />

      {!loading && datasets.length === 0 && <NoDatasetsMessage />}

      {datasets.length > 0 && (
        <main className="flex flex-grow">
          {createDataLoading && <CreationLoadingModal />}

          {showMenu && (
            <FieldsMenu
              loading={loading}
              handleExportSelectedDataset={handleExportSelectedDataset}
              handleAddNewField={handleAddNewField}
            />
          )}

          <DatasetPlayground loading={loading} />
        </main>
      )}
    </HomeLayout>
  )
}
