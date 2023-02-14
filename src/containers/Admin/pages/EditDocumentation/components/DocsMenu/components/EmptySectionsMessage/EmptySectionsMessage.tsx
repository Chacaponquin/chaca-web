import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/hooks"

export default function EmptySectionsMessage({
  handleAddNewApiSection,
}: {
  handleAddNewApiSection: () => void
}) {
  const { BUTTON_TEXT, EMPTY_TEXT } = useLanguage({
    BUTTON_TEXT: { en: "Add Section", es: "Añadir Sección" },
    EMPTY_TEXT: { en: "No sections here", es: "No hay secciones" },
  })

  return (
    <div className='flex flex-col gap-y-4 items-center mt-10'>
      <div>
        <img
          src={APP_IMAGES.EMPTY_FIELDS.image}
          alt={APP_IMAGES.EMPTY_FIELDS.alt}
          className='w-[200px]'
        />
      </div>

      <div className='flex flex-col gap-y-1 items-center'>
        <p className='font-fontBold text-grayStrongColor text-lg'>{EMPTY_TEXT}</p>

        <ChacaSimpleButton
          text={BUTTON_TEXT}
          color='primary'
          size='medium'
          onClick={handleAddNewApiSection}
        />
      </div>
    </div>
  )
}
