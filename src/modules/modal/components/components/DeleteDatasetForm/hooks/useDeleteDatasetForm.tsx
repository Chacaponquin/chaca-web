import { ModalContext } from "@modules/modal/context"
import { useContext } from "react"

export function useDeleteDatasetForm() {
  const { handleCloseModal } = useContext(ModalContext)
  const handleDeleteDataset = () => {
    handleCloseModal()
  }

  return { handleDeleteDataset }
}
