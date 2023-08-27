import { MODAL_ACTIONS } from "@modules/modal/constants/MODAL_ACTIONS"
import { ModalProps } from "@modules/modal/interfaces/modal.interface"
import {
  AddFieldForm,
  DeleteDatasetForm,
  EditDataset,
  EditFieldForm,
  ExportAllDatasetForm,
  ExportSelectDatasetForm,
  TestEndpointForm,
} from "./components"

const Modal = ({ modalProps }: { modalProps: ModalProps }) => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen bg-grayStrongColor/50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md px-10 py-5 shadow-md min-w-[500px] w-max">
        {modalProps.type === MODAL_ACTIONS.EDIT_DATASET && (
          <EditDataset dataset={modalProps.dataset} />
        )}
        {modalProps.type === MODAL_ACTIONS.ADD_FIELD && <AddFieldForm modalProps={modalProps} />}
        {modalProps.type === MODAL_ACTIONS.DELETE_DATASET && (
          <DeleteDatasetForm datasetName={modalProps.datasetName} />
        )}
        {modalProps.type === MODAL_ACTIONS.EDIT_FIELD && <EditFieldForm modalProps={modalProps} />}
        {modalProps.type === MODAL_ACTIONS.EXPORT_SELECT_DATASET && (
          <ExportSelectDatasetForm {...modalProps} />
        )}
        {modalProps.type === MODAL_ACTIONS.EXPORT_ALL_DATASETS && (
          <ExportAllDatasetForm {...modalProps} />
        )}
        {modalProps.type === MODAL_ACTIONS.TEST_ENDPOINT && (
          <TestEndpointForm option={modalProps.option} />
        )}
      </div>
    </div>
  )
}

export default Modal
