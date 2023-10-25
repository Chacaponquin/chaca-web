import {
  CreationLoadingModal,
  DatasetPlayground,
  FieldsMenu,
  HomeLayout,
  NoDatasetsMessage,
} from "./components"
import { useHome } from "./hooks"
import { Fragment, useContext } from "react"
import { HomeContext } from "./context"

export default function Home() {
  const {
    handleExportSelectedDataset,
    createDataLoading,
    handleAddNewField,
    handleCreateAllDatasets,
    handleAddDataset,
    datasets,
    showFieldsMenu,
  } = useHome()
  const { smallWindow } = useContext(HomeContext)

  return (
    <HomeLayout>
      <Fragment>
        {datasets && datasets.length === 0 && (
          <NoDatasetsMessage handleCreateDataset={handleAddDataset} />
        )}

        {datasets && datasets.length > 0 && (
          <section className="flex flex-grow">
            {createDataLoading && <CreationLoadingModal />}

            {(!smallWindow || (smallWindow && showFieldsMenu)) && (
              <FieldsMenu
                handleExportSelectedDataset={handleExportSelectedDataset}
                handleAddNewField={handleAddNewField}
              />
            )}

            <DatasetPlayground
              handleCreateSelectDataset={handleExportSelectedDataset}
              handleAddDataset={handleAddDataset}
              handleCreateAllDatasets={handleCreateAllDatasets}
            />
          </section>
        )}
      </Fragment>
    </HomeLayout>
  )
}
