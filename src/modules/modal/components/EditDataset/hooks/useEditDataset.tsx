import { Dataset } from "@modules/datasets/domain/tree"
import { useDatasets } from "@modules/datasets/hooks"
import { useFormErrors, useModal } from "@modules/modal/hooks"
import { useState } from "react"

export default function useEditDataset({ dataset }: { dataset: Dataset }) {
  const { handleEditDataset: handleEditDatasetService } = useDatasets()
  const { handleCloseModal } = useModal()
  const { handleError } = useFormErrors()

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
      error: handleError,
    })
  }

  return { datasetName, handleDatasetName, handleEditDataset, handleChangeLimit, datasetLimit }
}
