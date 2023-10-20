import { useDatasetServices } from "@modules/datasets/services"
import { useModalServices } from "@modules/modal/services"

export function useDeleteDatasetForm({ datasetId }: { datasetId: string }) {
  const { handleCloseModal } = useModalServices()
  const { hanldeDeleteDataset: handleDeleteDatasetService } = useDatasetServices()

  const handleDeleteDataset = () => {
    handleDeleteDatasetService(datasetId)

    handleCloseModal()
  }

  return { handleDeleteDataset }
}
