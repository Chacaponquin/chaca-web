import {
  CreationLoading,
  DatasetPlayground,
  FieldsMenu,
  HomeLayout,
  Modals,
  Navbar,
  NoDatasetsMessage,
} from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { HomeContext } from "./context"

export default function Home() {
  const { smallWindow, createDataLoading } = useContext(HomeContext)

  const {
    handleAddNewField,
    datasets,
    showFieldsMenu,
    handleExportImage,
    handleOpenDeleteAll,
    loading,
    handleOpenExportImage,
    handleOpenExportAllDatasets,
    handleExportDatasets,
  } = useHome()

  const showMenu = !smallWindow || (smallWindow && showFieldsMenu)

  return (
    <HomeLayout>
      <Modals handleExportImage={handleExportImage} handleExportDatasets={handleExportDatasets} />

      <Navbar
        handleExportAllDatasets={handleOpenExportAllDatasets}
        handleExportImage={handleOpenExportImage}
        handleDeleteAll={handleOpenDeleteAll}
        loading={loading}
      />

      {!loading && datasets.length === 0 && <NoDatasetsMessage />}

      {datasets.length > 0 && (
        <main className="flex flex-grow">
          {createDataLoading && <CreationLoading />}

          {showMenu && <FieldsMenu loading={loading} handleAddNewField={handleAddNewField} />}

          <DatasetPlayground loading={loading} />
        </main>
      )}
    </HomeLayout>
  )
}
