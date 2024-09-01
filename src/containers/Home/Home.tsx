import {
  CreationLoading,
  DatasetPlayground,
  FieldsMenu,
  HomeLayout,
  Modals,
  Navbar,
  NoSchemasMessage,
} from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { HomeContext } from "./context"

export default function Home() {
  const { smallWindow, createDataLoading } = useContext(HomeContext)

  const {
    handleAddNewField,
    dataset,
    showFieldsMenu,
    handleExportImage,
    handleOpenDeleteAll,
    loading,
    handleOpenExportImage,
    handleOpenExportDataset,
    handleExportDataset,
  } = useHome()

  const showMenu = !smallWindow || (smallWindow && showFieldsMenu)

  return (
    <HomeLayout>
      <Modals handleExportImage={handleExportImage} handleExportDataset={handleExportDataset} />

      <Navbar
        handleExportDataset={handleOpenExportDataset}
        handleExportImage={handleOpenExportImage}
        handleDeleteAll={handleOpenDeleteAll}
        loading={loading}
      />

      {!loading && dataset.length === 0 && <NoSchemasMessage />}

      {dataset.length > 0 && (
        <main className="flex flex-grow">
          {createDataLoading && <CreationLoading />}

          {showMenu && <FieldsMenu loading={loading} handleAddNewField={handleAddNewField} />}

          <DatasetPlayground loading={loading} />
        </main>
      )}
    </HomeLayout>
  )
}
