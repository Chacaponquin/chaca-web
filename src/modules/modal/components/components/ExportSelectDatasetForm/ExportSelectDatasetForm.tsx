import { ExportForm, ModalTitle, ModalButtons } from "../../shared/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ModalExportSelectDataset } from "@modules/modal/interfaces/modal.interface"

const ExportSelectDatasetForm = ({ handleCreateSelectDataset }: ModalExportSelectDataset) => {
  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useLanguage({
    EXPORT_DATASET_TEXT: { en: "Export Single Dataset", es: "Exportar Dataset" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  return (
    <div className="flex flex-col w-full">
      <ModalTitle titleText={EXPORT_DATASET_TEXT} />
      <ExportForm saveModelOption={true} />
      <ModalButtons handleNext={handleCreateSelectDataset} nextText={SUBMIT_TEXT} type="edit" />
    </div>
  )
}

export default ExportSelectDatasetForm
