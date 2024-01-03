import { useTranslation } from "@modules/app/modules/language/hooks"
import { DeleteForm, ModalContainer } from "../../shared/components"
import { useDeleteDatasetForm } from "./hooks"

interface Props {
  datasetName: string
  datasetId: string
}

export default function DeleteDatasetForm({ datasetName, datasetId }: Props) {
  const { handleDeleteDataset } = useDeleteDatasetForm({ datasetId })

  const { DELETE_DATASET_TEXT, DELETE_DATASET_MESSAGE } = useTranslation({
    DELETE_DATASET_TEXT: { en: "Delete Dataset", es: "Borrar Dataset" },
    DELETE_DATASET_MESSAGE: {
      en: "Are you sure you want to delete the dataset",
      es: "Seguro que quieres eliminar el dataset",
    },
  })

  return (
    <ModalContainer
      title={DELETE_DATASET_TEXT}
      type="delete"
      nextText={DELETE_DATASET_TEXT}
      handleNext={handleDeleteDataset}
      name="delete-dataset"
    >
      <DeleteForm message={DELETE_DATASET_MESSAGE} elementName={datasetName} />
    </ModalContainer>
  )
}
