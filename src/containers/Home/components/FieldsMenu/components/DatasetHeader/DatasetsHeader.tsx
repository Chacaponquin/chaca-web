import { useContext } from "react"
import { Bars, Plus } from "@modules/shared/assets/icons"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetConfigMenu } from "./components"
import { ChacaSelect } from "@form"
import { useDatasetsHeader } from "./hooks"

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
  } = useDatasetsHeader(handleCreateSelectDataset)

  return (
    <div className='pt-3 px-4 mb-2 w-full bg-white flex items-center justify-between'>
      <div className='gap-3 flex items-center'>
        <button onClick={handleNewDataset}>
          <Plus size={18} />
        </button>

        <ChacaSelect
          size={200}
          placeholder={"Select a Dataset"}
          options={datasets}
          labelKey={"name"}
          valueKey={"id"}
          value={selectedDataset ? selectedDataset.id : null}
          onChange={(value) => {
            handleSelectDataset(value as string)
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
