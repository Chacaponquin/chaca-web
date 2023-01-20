import { ModalContext } from "@modules/modal/context"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { useLanguage } from "@modules/shared/hooks"
import { useContext } from "react"

const ModalButtons = ({
  nextText,
  handleNext,
  type,
}: {
  handleNext: () => void
  nextText: string
  type: "delete" | "edit"
}) => {
  const { handleCloseModal } = useContext(ModalContext)

  const { CANCEL_TEXT } = useLanguage({ CANCEL_TEXT: { en: "Cancel", es: "Cancelar" } })

  return (
    <div className='grid grid-cols-2 gap-x-4 mt-5'>
      <div>
        <ChacaSimpleButton
          color={type === "delete" ? "danger" : "primary"}
          size='large'
          text={nextText}
          onClick={handleNext}
          className='w-full text-center flex justify-center !rounded'
        />
      </div>

      <div>
        <ChacaSimpleButton
          color='cancel'
          size='large'
          text={CANCEL_TEXT}
          onClick={handleCloseModal}
          className='w-full text-center flex justify-center !rounded'
        />
      </div>
    </div>
  )
}

export default ModalButtons
