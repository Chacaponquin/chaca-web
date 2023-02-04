import { useState, useContext } from "react"
import { datasetServices } from "@modules/datasets/services"
import { toast } from "react-toastify"
import { ModalContext } from "@modules/modal/context"
import { EmptyDatasetNameError, RepeatDatasetNameError } from "@modules/datasets/errors"

export function useAddDatasetForm() {
  const [datasetName, setDatasetName] = useState("")

  const { handleCloseModal } = useContext(ModalContext)
  const { addDataset } = datasetServices()

  const handleDatasetName = (name: string) => {
    setDatasetName(name)
  }

  const handleAddDataset = () => {
    try {
      addDataset(datasetName)
      // close modal
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyDatasetNameError) {
        toast.error(`The dataset name can not be an empty string`)
      } else if (error instanceof RepeatDatasetNameError) {
        toast.error(`Aldready exists a dataset with that name`)
      }
    }
  }

  return { datasetName, handleAddDataset, handleDatasetName }
}
