import { ChacaSimpleButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleExportSelectedDataset(): void
  handleAddNewField(): void
}

export default function DatasetButtons({ handleExportSelectedDataset, handleAddNewField }: Props) {
  const { EXPORT_TEXT, NEW_FIELD_TEXT } = useTranslation({
    EXPORT_TEXT: { en: "Export", es: "Exportar" },
    NEW_FIELD_TEXT: { en: "New Field", es: "Nuevo Campo" },
  })

  return (
    <div className="flex justify-end mt-2 gap-4 px-3">
      <ChacaSimpleButton
        color="primary"
        size="sm"
        text={NEW_FIELD_TEXT}
        onClick={handleAddNewField}
        id="create-field-button"
      />

      <ChacaSimpleButton
        text={EXPORT_TEXT}
        color="secondary"
        size="sm"
        onClick={handleExportSelectedDataset}
      />
    </div>
  )
}
