import { useTranslation } from "@modules/app/modules/language/hooks"
import { useEditSchema } from "./hooks"
import { Schema } from "@modules/dataset/domain/core/schema"
import { Modal } from "@modules/modal/components"
import { DatasetForm } from "../../shared/components"

interface Props {
  schema: Schema
}

export default function EditSchema({ schema }: Props) {
  const { TITLE, EDIT_TEXT } = useTranslation({
    TITLE: { en: "Edit schema", es: "Editar schema" },
    EDIT_TEXT: { en: "Edit", es: "Editar" },
  })

  const { datasetName, handleDatasetName, handleNext, datasetLimit, handleChangeLimit } =
    useEditSchema({
      schema: schema,
    })

  return (
    <Modal
      title={TITLE}
      handleNext={handleNext}
      nextText={EDIT_TEXT}
      type="edit"
      name="edit-dataset"
    >
      <DatasetForm
        name={datasetName}
        handleDatasetName={handleDatasetName}
        limit={datasetLimit}
        handleChangeLimit={handleChangeLimit}
      />
    </Modal>
  )
}
