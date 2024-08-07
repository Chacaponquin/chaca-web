import { ChacaSimpleButton } from "@form/components"

interface Props {
  nextText: string
  cancelText: string
  type: "delete" | "edit"
  handleCancel(): void
}

export default function ModalButtons({ nextText, type, handleCancel, cancelText }: Props) {
  return (
    <section className="flex justify-end gap-y-3 gap-x-3 mt-2.5 w-full">
      <ChacaSimpleButton
        color="cancel"
        size="base"
        text={cancelText}
        onClick={handleCancel}
        id="modal-cancel-button"
        type="button"
        disabled={false}
      />

      <ChacaSimpleButton
        color={type === "delete" ? "danger" : "primary"}
        size="base"
        text={nextText}
        id="modal-submit-button"
        type="submit"
        disabled={false}
      />
    </section>
  )
}
