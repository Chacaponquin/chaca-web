import { ChacaSimpleButton } from "../../../../../../../shared/components/ChacaButton"
import { useLanguage } from "../../../../../../../shared/hooks"

const ModalButtons = ({
  nextText,
  handleCancel,
  handleNext,
  type,
}: {
  handleNext: () => void
  handleCancel: () => void
  nextText: string
  type: "delete" | "edit"
}) => {
  const { CANCEL_TEXT } = useLanguage({ CANCEL_TEXT: { en: "Cancel", es: "Cancelar" } })

  return (
    <div className='grid grid-cols-2 gap-x-4 mt-5'>
      <div>
        <ChacaSimpleButton
          color={type === "delete" ? "danger" : "primary"}
          size='extra-large'
          text={nextText}
          onClick={handleNext}
          className='w-full text-center flex justify-center !rounded'
        />
      </div>

      <div>
        <ChacaSimpleButton
          color='cancel'
          size='extra-large'
          text={CANCEL_TEXT}
          onClick={handleCancel}
          className='w-full text-center flex justify-center !rounded'
        />
      </div>
    </div>
  )
}

export default ModalButtons
