import { useDatasets } from "@modules/datasets/hooks"
import { useModalServices } from "@modules/modal/services"

export function useDeleteDatasetForm({ datasetId }: { datasetId: string }) {
  const { handleCloseModal } = useModalServices()
  const { hanldeDeleteDataset: handleDeleteDatasetService } = useDatasets()

  const handleDeleteDataset = () => {
    handleDeleteDatasetService(datasetId)

    handleCloseModal()
  }

  return { handleDeleteDataset }
}
