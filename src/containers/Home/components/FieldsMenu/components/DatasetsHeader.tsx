import { useContext, useState } from "react"
import { Bars, Plus } from "@shared/assets/icons"
import { DatasetsContext } from "@shared/context"
import DatasetConfigMenu from "./DatasetConfigMenu"
import { ModalProps } from "@containers/Home/interfaces/modal.interface"
import { MODAL_ACTIONS } from "@containers/Home/constants/MODAL_ACTIONS"
import { ChacaSelect } from "@form"

const DatasetsHeader = ({ handleOpenModal }: { handleOpenModal: (props: ModalProps) => void }) => {
  const [openConfig, setOpenConfig] = useState(false)

  const { datasets, handleSelectDataset, selectedDataset } = useContext(DatasetsContext)

  const handleNewDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_DATASET })
    setOpenConfig(false)
  }

  const handleAddDatasetField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      parentFieldID: selectedDataset.id,
    })
    setOpenConfig(false)
  }

  const handleDeleteDataset = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: selectedDataset.name,
    })
    setOpenConfig(false)
  }

  const handleExportDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EXPORT_SELECT_DATASET })
    setOpenConfig(false)
  }

  return (
    <div className='pt-3 mb-2 w-full bg-white flex items-center justify-between px-2'>
      <div className='gap-3 flex items-center'>
        <button onClick={handleNewDataset}>
          <Plus size={18} />
        </button>

        <ChacaSelect
          size={170}
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
        <button onClick={() => setOpenConfig(!openConfig)}>
          <Bars size={18} />
        </button>

        {openConfig && (
          <DatasetConfigMenu
            handleAddDatasetField={handleAddDatasetField}
            handleDeleteDataset={handleDeleteDataset}
            handleExportDataset={handleExportDataset}
          />
        )}
      </div>
    </div>
  )
}

export default DatasetsHeader
