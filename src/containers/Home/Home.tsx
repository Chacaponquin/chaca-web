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
  const { smallWindow } = useContext(HomeContext)

  const {
    handleExportSelectedDataset,
    createDataLoading,
    handleAddNewField,
    handleCreateAllDatasets,
    handleAddDataset,
    datasets,
    showFieldsMenu,
    handleExportImage,
    handleDeleteAll,
  } = useHome()

  const showMenu = !smallWindow || (smallWindow && showFieldsMenu)

  return (
    <HomeLayout>
      <Navbar
        handleAddDataset={handleAddDataset}
        handleExportAllDatasets={handleCreateAllDatasets}
        handleExportImage={handleExportImage}
        handleDeleteAll={handleDeleteAll}
      />

      <ContentLoader />

      {datasets.length === 0 && <NoDatasetsMessage handleCreateDataset={handleAddDataset} />}

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
