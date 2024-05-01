import { ModalProps } from "@modules/modal/interfaces"
import { createContext, useState } from "react"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import {
  AddFieldForm,
  DeleteDatasetForm,
  EditDataset,
  EditFieldForm,
  ExportAllDatasetForm,
  ExportImage,
  ExportSelectDatasetForm,
} from "@modules/modal/components"
import { CodeProvider } from "./CodeContext"

interface Props {
  openModal: null | ModalProps
  handleOpenModal(props: ModalProps): void
  handleCloseModal(): void
}

export const ModalContext = createContext<Props>({ openModal: null } as Props)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState<ModalProps | null>(null)

  function handleOpenModal(props: ModalProps) {
    setOpenModal(props)
  }

  function handleCloseModal() {
    setOpenModal(null)
  }

  const data = { openModal, handleCloseModal, handleOpenModal }

  return (
    <ModalContext.Provider value={data}>
      {openModal && (
        <CodeProvider>
          {openModal.type === MODAL_ACTIONS.EDIT_DATASET && (
            <EditDataset dataset={openModal.dataset} />
          )}
          {openModal.type === MODAL_ACTIONS.ADD_FIELD && <AddFieldForm modalProps={openModal} />}
          {openModal.type === MODAL_ACTIONS.DELETE_DATASET && (
            <DeleteDatasetForm
              datasetName={openModal.datasetName}
              datasetId={openModal.datasetId}
            />
          )}
          {openModal.type === MODAL_ACTIONS.EDIT_FIELD && <EditFieldForm modalProps={openModal} />}
          {openModal.type === MODAL_ACTIONS.EXPORT_SELECT_DATASET && (
            <ExportSelectDatasetForm {...openModal} />
          )}
          {openModal.type === MODAL_ACTIONS.EXPORT_ALL_DATASETS && (
            <ExportAllDatasetForm {...openModal} />
          )}
          {openModal.type === MODAL_ACTIONS.EXPORT_IMAGE && <ExportImage {...openModal} />}
        </CodeProvider>
      )}

      {children}
    </ModalContext.Provider>
  )
}
