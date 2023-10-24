import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"

export function useDeleteDatasetForm({ datasetId }: { datasetId: string }) {
  const { handleCloseModal } = useModal()
  const { hanldeDeleteDataset: handleDeleteDatasetService } = useDatasets()

  const handleDeleteDataset = () => {
    handleDeleteDatasetService(datasetId)

    handleCloseModal()
  }

  return { handleDeleteDataset }
}
