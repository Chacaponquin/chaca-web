import { ChacaSimpleButton } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  handleNext: () => void
  nextText: string
  type: "delete" | "edit"
  nextButtonId?: string
}

const ModalButtons = ({ nextText, handleNext, type, nextButtonId }: Props) => {
  const { handleCloseModal } = useModal()
  const { CANCEL_TEXT } = useLanguage({ CANCEL_TEXT: { en: "Cancel", es: "Cancelar" } })

  return (
    <section className="grid grid-cols-2 gap-x-3 mt-5 w-full">
      <div className="w-full">
        <ChacaSimpleButton
          color={type === "delete" ? "danger" : "primary"}
          size="large"
          text={nextText}
          onClick={handleNext}
          className="text-center flex justify-center"
          full={true}
          id={nextButtonId}
          type="submit"
        />
      </div>

      <div className="w-full">
        <ChacaSimpleButton
          color="cancel"
          size="large"
          text={CANCEL_TEXT}
          onClick={handleCloseModal}
          className="text-center flex justify-center"
          full={true}
          id="modal-cancel-button"
        />
      </div>
    </section>
  )
}

export default ModalButtons
