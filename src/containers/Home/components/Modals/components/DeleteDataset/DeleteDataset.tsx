import { useTranslation } from "@modules/app/modules/language/hooks"
import { useDeleteDatasetForm } from "./hooks"
import { Modal } from "@modules/modal/components"
import { DeleteForm } from "../../shared/components"

interface Props {
  name: string
  id: string
}

export default function DeleteDataset({ name, id }: Props) {
  const { handleDeleteDataset } = useDeleteDatasetForm({ datasetId: id })

  const { DELETE_DATASET_TEXT, DELETE_DATASET_MESSAGE } = useTranslation({
    DELETE_DATASET_TEXT: { en: "Delete Dataset", es: "Borrar Dataset" },
    DELETE_DATASET_MESSAGE: {
      en: "Are you sure you want to delete the dataset",
      es: "Seguro que quieres eliminar el dataset",
    },
  })

  return (
    <Modal
      title={DELETE_DATASET_TEXT}
      type="delete"
      nextText={DELETE_DATASET_TEXT}
      handleNext={handleDeleteDataset}
      name="delete-dataset"
    >
      <DeleteForm message={DELETE_DATASET_MESSAGE} elementName={name} />
    </Modal>
  )
}
