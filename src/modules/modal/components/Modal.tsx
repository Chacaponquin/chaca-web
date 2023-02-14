import { MODAL_ACTIONS } from "@modules/modal/constants/MODAL_ACTIONS"
import { ModalProps } from "@modules/modal/interfaces/modal.interface"
import {
  AddDatasetForm,
  AddFieldForm,
  DeleteDatasetForm,
  EditDataset,
  EditFieldForm,
  ExportAllDatasetForm,
  ExportSelectDatasetForm,
  TestEndpointForm,
  AddApiDocSection,
} from "./components"

const Modal = ({ modalProps }: { modalProps: ModalProps }) => {
  return (
    <div className='w-full fixed top-0 left-0 h-screen bg-slate-500/50 z-50 flex justify-center items-center'>
      <div className='bg-white rounded-md px-10 py-5 shadow-md min-w-[500px]'>
        {modalProps.type === MODAL_ACTIONS.EDIT_DATASET && <EditDataset />}
        {modalProps.type === MODAL_ACTIONS.ADD_FIELD && <AddFieldForm modalProps={modalProps} />}
        {modalProps.type === MODAL_ACTIONS.ADD_DATASET && <AddDatasetForm />}
        {modalProps.type === MODAL_ACTIONS.DELETE_DATASET && <DeleteDatasetForm />}
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
        {modalProps.type === MODAL_ACTIONS.ADMIN_CREATE_API_DOC_SECTION && (
          <AddApiDocSection {...modalProps} />
        )}
      </div>
    </div>
  )
}

export default Modal
