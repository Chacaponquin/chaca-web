import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"
import { DatasetsContext } from "@modules/datasets/context"
import { EmptyDatasetNameError, RepeatDatasetNameError } from "@modules/datasets/errors"
import { useDatasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useContext, useState } from "react"

export default function useEditDataset() {
  const { selectedDataset } = useContext(DatasetsContext)
  const { editDataset } = useDatasetServices()
  const { handleCloseModal } = useContext(ModalContext)
  const { toastError } = useToastServices()

  const [datasetName, setDatasetName] = useState(selectedDataset.name)

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
      editDataset(datasetName)
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
