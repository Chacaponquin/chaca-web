import { useTranslation } from "@modules/app/modules/language/hooks"
import { useEditDataset } from "./hooks"
import { Dataset } from "@modules/datasets/domain/core"
import { Modal } from "@modules/modal/components"
import { DatasetForm } from "../../shared/components"

interface Props {
  dataset: Dataset
}

export default function EditDataset({ dataset }: Props) {
  const { TITLE, EDIT_TEXT } = useTranslation({
    TITLE: { en: "Edit Dataset", es: "Editar Dataset" },
    EDIT_TEXT: { en: "Edit Dataset", es: "Editar Dataset" },
  })

  const { datasetName, handleDatasetName, handleEditDataset, datasetLimit, handleChangeLimit } =
    useEditDataset({
      dataset,
    })

  return (
    <Modal
      title={TITLE}
      handleNext={handleEditDataset}
      nextText={EDIT_TEXT}
      type="edit"
      name="edit-dataset"
    >
      <DatasetForm
        datasetName={datasetName}
        handleDatasetName={handleDatasetName}
        limit={datasetLimit}
        handleChangeLimit={handleChangeLimit}
      />
    </Modal>
  )
}
