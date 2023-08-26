import { ChacaSimpleButton } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function DatasetButtons({
  handleExportSelectedDataset,
  handleAddNewField,
}: {
  handleExportSelectedDataset: () => void
  handleAddNewField: () => void
}) {
  const { EXPORT_TEXT, NEW_FIELD_TEXT } = useLanguage({
    EXPORT_TEXT: { en: "Export", es: "Exportar" },
    NEW_FIELD_TEXT: { en: "New Field", es: "Nuevo Campo" },
  })

  return (
    <div className="flex justify-end mt-2 gap-4 px-3">
      <ChacaSimpleButton
        color="primary"
        size="small"
        text={NEW_FIELD_TEXT}
        onClick={handleAddNewField}
      />

      <ChacaSimpleButton
        text={EXPORT_TEXT}
        color="secondary"
        size="small"
        onClick={handleExportSelectedDataset}
      />
    </div>
  )
}
