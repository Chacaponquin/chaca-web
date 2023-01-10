import { ChacaSimpleButton } from "../../../../../../shared/components/ChacaButton"

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
  return (
    <div className='flex w-full justify-end gap-5 mt-5'>
      <ChacaSimpleButton
        color={type === "delete" ? "danger" : "primary"}
        size='medium'
        text={nextText}
        onClick={handleNext}
      />

      <ChacaSimpleButton color='cancel' size='medium' text={"Cancel"} onClick={handleCancel} />
    </div>
  )
}

export default ModalButtons
