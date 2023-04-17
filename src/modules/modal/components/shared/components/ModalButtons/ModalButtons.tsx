import { ModalContext } from "@modules/modal/context"
import { ChacaSimpleButton } from "@form/components"
import { useLanguage } from "@modules/shared/modules/app/hooks"
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
    <div className='grid grid-cols-2 gap-x-3 mt-5 w-full'>
      <div className='w-full'>
        <ChacaSimpleButton
          color={type === "delete" ? "danger" : "primary"}
          size='large'
          text={nextText}
          onClick={handleNext}
          className='text-center flex justify-center'
          full={true}
        />
      </div>

      <div className='w-full'>
        <ChacaSimpleButton
          color='cancel'
          size='large'
          text={CANCEL_TEXT}
          onClick={handleCloseModal}
          className='text-center flex justify-center'
          full={true}
        />
      </div>
    </div>
  )
}

export default ModalButtons
