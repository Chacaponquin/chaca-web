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
    <div className='flex w-full justify-end gap-5 mt-5'>
      <ChacaSimpleButton
        color={type === "delete" ? "danger" : "primary"}
        size='medium'
        text={nextText}
        onClick={handleNext}
      />

      <ChacaSimpleButton color='cancel' size='medium' text={CANCEL_TEXT} onClick={handleCancel} />
    </div>
  )
}

export default ModalButtons
