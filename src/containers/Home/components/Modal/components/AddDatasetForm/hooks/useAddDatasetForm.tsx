import { useState, useContext } from "react"
import { datasetServices } from "@modules/datasets/services"
import { toast } from "react-toastify"
import { ModalContext } from "@modules/modal/context"

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
      toast("The dataset name can not be an empty string")
    }
  }

  return { datasetName, handleAddDataset, handleDatasetName }
}
