import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  datasetId: string
}

export default function useDeleteDatasetForm({ datasetId }: Props) {
  const { handleCloseModal } = useModal()
  const { hanldeDeleteDataset: handleDeleteDatasetHook } = useDatasets()

  function handleDeleteDataset() {
    handleDeleteDatasetHook(datasetId)
    handleCloseModal()
  }

  return { handleDeleteDataset }
}
