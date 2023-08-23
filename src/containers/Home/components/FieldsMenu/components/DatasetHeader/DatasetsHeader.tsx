import { useContext } from "react"
import { Bars, Plus } from "@modules/app/modules/icon/components"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetConfigMenu } from "./components"
import { ChacaSelect } from "@form/components"
import { useDatasetsHeader } from "./hooks"
import { useLanguage } from "@modules/app/modules/language/hooks"

const DatasetsHeader = ({
  handleCreateSelectDataset,
}: {
  handleCreateSelectDataset: () => void
}) => {
  const { datasets, selectedDataset, handleSelectDataset } = useContext(DatasetsContext)
  const {
    handleAddDatasetField,
    handleDeleteDataset,
    handleExportDataset,
    handleNewDataset,
    openConfig,
    handleInteractOpenConfig,
    handleEditDataset,
    menuRef,
  } = useDatasetsHeader(handleCreateSelectDataset)

  const { SELECT_DATASET_MESSAGE } = useLanguage({
    NEW_DATASET_MESSAGE: { en: "New Dataset", es: "Añadir Dataset" },
    SELECT_DATASET_MESSAGE: { en: "Select a Dataset", es: "Selecciona un Dataset" },
  })

  return (
    <div className='pt-2 px-4 mb-2 w-full bg-white flex items-center justify-between'>
      <div className='gap-3 flex items-center'>
        <button onClick={handleNewDataset}>
          <Plus size={18} />
        </button>

        <ChacaSelect
          size={200}
          placeholder={SELECT_DATASET_MESSAGE}
          options={datasets}
          labelKey={"name"}
          valueKey={"id"}
          value={selectedDataset ? selectedDataset.id : null}
          onChange={(value) => {
            handleSelectDataset(value)
          }}
          dimension='small'
        />
      </div>

      <div className='flex flex-col items-end'>
        <button onClick={handleInteractOpenConfig}>
          <Bars size={18} />
        </button>

        {openConfig && (
          <DatasetConfigMenu
            menuRef={menuRef}
            handleAddDatasetField={handleAddDatasetField}
            handleDeleteDataset={handleDeleteDataset}
            handleExportDataset={handleExportDataset}
            handleEditDataset={handleEditDataset}
          />
        )}
      </div>
    </div>
  )
}

export default DatasetsHeader
