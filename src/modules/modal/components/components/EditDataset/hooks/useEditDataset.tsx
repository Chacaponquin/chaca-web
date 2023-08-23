import { DatasetsContext } from "@modules/datasets/context"
import { EmptyDatasetNameError, RepeatDatasetNameError } from "@modules/datasets/errors"
import { useDatasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useContext, useState } from "react"
import { toast } from "react-toastify"

export default function useEditDataset() {
  const { selectedDataset } = useContext(DatasetsContext)
  const { editDataset } = useDatasetServices()
  const { handleCloseModal } = useContext(ModalContext)

  const [datasetName, setDatasetName] = useState(selectedDataset.name)

  const handleDatasetName = (name: string) => {
    setDatasetName(name)
  }

  const handleEditDataset = () => {
    try {
      editDataset(datasetName)
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyDatasetNameError) {
        toast.error(`The dataset name can not be an empty string`)
      } else if (error instanceof RepeatDatasetNameError) {
        toast.error(`Aldready exists a dataset with that name`)
      }
    }
  }

  return { datasetName, handleDatasetName, handleEditDataset }
}
