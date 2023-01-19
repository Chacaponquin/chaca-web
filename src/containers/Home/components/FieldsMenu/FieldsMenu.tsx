import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { DatasetsHeader, ExportButton, FieldContainer, NoFieldsMessage } from "./components"
import { ModalContext } from "@modules/modal/context"

const FieldsMenu = () => {
  const { selectedDataset } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

  const handleExportAllDatasets = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EXPORT_ALL_DATASETS })
  }

  return (
    <div className='h-screen min-w-[300px] max-w-[300px] bg-white border-r-2 border-t-2 border-b-2 flex flex-col justify-between'>
      <div className='flex flex-col w-full'>
        <DatasetsHeader />

        <div className='h-full bg-white w-full flex flex-col'>
          {selectedDataset && selectedDataset.fields.length > 0 ? (
            selectedDataset.fields.map((f) => <FieldContainer key={f.id} margin={0} field={f} />)
          ) : (
            <NoFieldsMessage />
          )}
        </div>
      </div>

      <ExportButton handleExportAllDatasets={handleExportAllDatasets} />
    </div>
  )
}

export default FieldsMenu
