import { useTranslation } from "@modules/app/modules/language/hooks"
import { useDeleteSchemaForm } from "./hooks"
import { Modal } from "@modules/modal/components"
import { DeleteForm } from "../../shared/components"

interface Props {
  name: string
  id: string
}

export default function DeleteSchema({ name, id }: Props) {
  const { handleDeleteSchema } = useDeleteSchemaForm({ schemaId: id })

  const { DELETE_DATASET_TEXT, DELETE_DATASET_MESSAGE } = useTranslation({
    DELETE_DATASET_TEXT: { en: "Delete schema", es: "Borrar schema" },
    DELETE_DATASET_MESSAGE: {
      en: "Are you sure you want to delete the schema",
      es: "Seguro que quieres eliminar el schema",
    },
  })

  return (
    <Modal
      title={DELETE_DATASET_TEXT}
      type="delete"
      nextText={DELETE_DATASET_TEXT}
      handleNext={handleDeleteSchema}
      name="delete-dataset"
    >
      <DeleteForm message={DELETE_DATASET_MESSAGE} name={name} />
    </Modal>
  )
}
