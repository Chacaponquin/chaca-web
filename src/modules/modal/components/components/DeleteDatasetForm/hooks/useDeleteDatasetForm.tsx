import { useModalServices } from "@modules/modal/services"

export function useDeleteDatasetForm() {
  const { handleCloseModal } = useModalServices()

  const handleDeleteDataset = () => {
    handleCloseModal()
  }

  return { handleDeleteDataset }
}
