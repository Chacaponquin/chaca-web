import { ChacaButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleAddNewField(): void
}

export default function DatasetButtons({ handleAddNewField }: Props) {
  const { NEW_FIELD_TEXT } = useTranslation({
    NEW_FIELD_TEXT: { en: "New Field", es: "Nuevo Campo" },
  })

  return (
    <div className="flex justify-end mt-2 gap-4">
      <ChacaButton
        color="primary"
        size="sm"
        text={NEW_FIELD_TEXT}
        onClick={handleAddNewField}
        id="create-field-button"
      />
    </div>
  )
}
