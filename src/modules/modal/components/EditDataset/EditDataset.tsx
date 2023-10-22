import { useLanguage } from "@modules/app/modules/language/hooks"
import { DatasetForm, ModalContainer } from "../../shared/components"
import { useEditDataset } from "./hooks"
import { Dataset } from "@modules/datasets/domain/tree"

export default function EditDataset({ dataset }: { dataset: Dataset }) {
  const { TITLE, EDIT_TEXT } = useLanguage({
    TITLE: { en: "Edit Dataset", es: "Editar Dataset" },
    EDIT_TEXT: { en: "Edit Dataset", es: "Editar Dataset" },
  })

  const { datasetName, handleDatasetName, handleEditDataset, datasetLimit, handleChangeLimit } =
    useEditDataset({
      dataset,
    })

  return (
    <ModalContainer
      title={TITLE}
      handleNext={handleEditDataset}
      nextButtonId="modal-edit-dataset-button"
      nextText={EDIT_TEXT}
      type="edit"
    >
      <DatasetForm
        datasetName={datasetName}
        handleDatasetName={handleDatasetName}
        limit={datasetLimit}
        handleChangeLimit={handleChangeLimit}
      />
    </ModalContainer>
  )
}
