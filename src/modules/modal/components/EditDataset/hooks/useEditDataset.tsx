import { useToast } from "@modules/app/modules/toast/hooks"
import { Dataset } from "@modules/datasets/domain/tree"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useState } from "react"

interface Props {
  dataset: Dataset
}

export default function useEditDataset({ dataset }: Props) {
  const { handleEditDataset: handleEditDatasetService } = useDatasets()
  const { handleCloseModal } = useModal()
  const { toastChacaError } = useToast()

  const [datasetName, setDatasetName] = useState(dataset.name)
  const [datasetLimit, setDatasetLimit] = useState(dataset.limit)

  function handleDatasetName(name: string) {
    setDatasetName(name)
  }

  function handleChangeLimit(limit: number) {
    setDatasetLimit(limit)
  }

  function handleEditDataset() {
    handleEditDatasetService({
      datasetId: dataset.id,
      name: datasetName.trim(),
      limit: datasetLimit,
      success() {
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { datasetName, handleDatasetName, handleEditDataset, handleChangeLimit, datasetLimit }
}
