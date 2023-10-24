import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { Dataset } from "@modules/datasets/domain/tree"
import { EmptyDatasetNameError, RepeatDatasetNameError } from "@modules/datasets/errors"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useState } from "react"

export default function useEditDataset({ dataset }: { dataset: Dataset }) {
  const { handleEditDataset: handleEditDatasetService } = useDatasets()
  const { handleCloseModal } = useModal()
  const { toastError } = useToast()

  const [datasetName, setDatasetName] = useState(dataset.name)
  const [datasetLimit, setDatasetLimit] = useState(dataset.limit)

  const handleDatasetName = (name: string) => {
    setDatasetName(name)
  }

  function handleChangeLimit(limit: number) {
    setDatasetLimit(limit)
  }

  const { EMPTY_NAME, REPEAT_NAME } = useLanguage({
    REPEAT_NAME: {
      en: "Aldready exists a dataset with that name",
      es: "Ya existe un dataset con ese nombre",
    },
    EMPTY_NAME: {
      en: "The dataset name can not be an empty string",
      es: "El nombre del nuevo dataset no puede estar vacío",
    },
  })

  const handleEditDataset = () => {
    try {
      handleEditDatasetService({ datasetId: dataset.id, name: datasetName, limit: datasetLimit })
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyDatasetNameError) {
        toastError(EMPTY_NAME)
      } else if (error instanceof RepeatDatasetNameError) {
        toastError(REPEAT_NAME)
      }
    }
  }

  return { datasetName, handleDatasetName, handleEditDataset, handleChangeLimit, datasetLimit }
}
