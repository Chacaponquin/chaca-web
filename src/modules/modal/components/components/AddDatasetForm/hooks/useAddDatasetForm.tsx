import { useState, useContext } from "react"
import { useDatasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { EmptyDatasetNameError, RepeatDatasetNameError } from "@modules/datasets/errors"
import { useToastServices } from "@modules/app/modules/toast/services"
import { useLanguage } from "@modules/app/modules/language/hooks"

export function useAddDatasetForm() {
  const [datasetName, setDatasetName] = useState("")
  const { toastError } = useToastServices()

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

  const { handleCloseModal } = useContext(ModalContext)
  const { handleAddDataset: handleAddDatasetService } = useDatasetServices()

  const handleDatasetName = (name: string) => {
    setDatasetName(name)
  }

  const handleAddDataset = () => {
    try {
      handleAddDatasetService({ name: datasetName })
      // close modal
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyDatasetNameError) {
        toastError(EMPTY_NAME)
      } else if (error instanceof RepeatDatasetNameError) {
        toastError(REPEAT_NAME)
      }
    }
  }

  return { datasetName, handleAddDataset, handleDatasetName }
}
