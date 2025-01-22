import { ChacaButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { APP_IMAGES } from "@modules/app/constants/image"

interface Props {
  handleAddNewField(): void
}

export default function NoFieldsMessage({ handleAddNewField }: Props) {
  const { ADD_FIELD_TEXT, NO_FIELDS_TEXT } = useTranslation({
    ADD_FIELD_TEXT: { en: "Add Field", es: "Nuevo Campo" },
    NO_FIELDS_TEXT: { en: "No fields found", es: "No hay campos" },
  })

  return (
    <div className="flex mt-8 justify-center flex-col items-center">
      <img
        src={APP_IMAGES.EMPTY_FIELDS.image}
        alt={APP_IMAGES.EMPTY_FIELDS.alt}
        className="max-w-[200px] w-full mt-5 mb-6"
      />
      <p className="text-lg text-slate-500 dark:text-white font-fontMedium mb-2.5">
        {NO_FIELDS_TEXT}
      </p>

      <ChacaButton
        onClick={handleAddNewField}
        text={ADD_FIELD_TEXT}
        color="primary"
        size="sm"
        type="button"
        id="create-first-field-button"
      />
    </div>
  )
}
