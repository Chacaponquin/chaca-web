import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"
import { EmptyDatasetNameError, RepeatDatasetNameError } from "@modules/datasets/errors"
import { useDatasetServices } from "@modules/datasets/services"
import { useModalServices } from "@modules/modal/services"
import { useState } from "react"

export default function useEditDataset({ name, id }: { name: string; id: string }) {
  const { handleEditDataset: handleEditDatasetService } = useDatasetServices()
  const { handleCloseModal } = useModalServices()
  const { toastError } = useToastServices()

  const [datasetName, setDatasetName] = useState(name)

  const handleDatasetName = (name: string) => {
    setDatasetName(name)
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
      handleEditDatasetService({ datasetId: id, name: datasetName })
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyDatasetNameError) {
        toastError(EMPTY_NAME)
      } else if (error instanceof RepeatDatasetNameError) {
        toastError(REPEAT_NAME)
      }
    }
  }

  return { datasetName, handleDatasetName, handleEditDataset }
}
