import { MODAL_ACTIONS } from "../../constants/MODAL_ACTIONS"
import { ModalProps } from "../../interfaces/modal.interface"
import AddDatasetForm from "./components/AddDatasetForm"
import AddFieldForm from "./components/AddFieldForm"
import DeleteDatasetForm from "./components/DeleteDatasetForm"
import EditFieldForm from "./components/EditFieldForm"
import ExportAllDatasetForm from "./components/ExportAllDatasetForm"
import ExportSelectDatasetForm from "./components/ExportSelectDatasetForm"

const Modal = ({
  modalProps,
  handleCloseModal,
  handleCreateSelectDataset,
  handleCreateAllDatasets,
}: {
  modalProps: ModalProps
  handleCloseModal: () => void
  handleCreateSelectDataset: () => void
  handleCreateAllDatasets: () => void
}) => {
  return (
    <div className='w-full fixed top-0 left-0 h-screen bg-slate-500/50 z-50 flex justify-center items-center'>
      <div className='bg-white rounded-md px-10 py-5 shadow-md min-w-[500px]'>
        {modalProps.type === MODAL_ACTIONS.ADD_FIELD && (
          <AddFieldForm handleCloseModal={handleCloseModal} modalProps={modalProps} />
        )}
        {modalProps.type === MODAL_ACTIONS.ADD_DATASET && (
          <AddDatasetForm handleCloseModal={handleCloseModal} />
        )}
        {modalProps.type === MODAL_ACTIONS.DELETE_DATASET && (
          <DeleteDatasetForm handleCloseModal={handleCloseModal} />
        )}
        {modalProps.type === MODAL_ACTIONS.EDIT_FIELD && (
          <EditFieldForm handleCloseModal={handleCloseModal} modalProps={modalProps} />
        )}
        {modalProps.type === MODAL_ACTIONS.EXPORT_SELECT_DATASET && (
          <ExportSelectDatasetForm
            handleCloseModal={handleCloseModal}
            handleCreateSelectDataset={handleCreateSelectDataset}
          />
        )}
        {modalProps.type === MODAL_ACTIONS.EXPORT_ALL_DATASETS && (
          <ExportAllDatasetForm
            handleCloseModal={handleCloseModal}
            handleCreateAllDatasets={handleCreateAllDatasets}
          />
        )}
      </div>
    </div>
  )
}

export default Modal
