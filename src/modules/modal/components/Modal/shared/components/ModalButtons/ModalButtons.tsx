import { ChacaButton } from "@form/components"

interface Props {
  nextText: string
  cancelText: string
  type: "delete" | "edit"
  handleCancel(): void
}

export default function ModalButtons({ nextText, type, handleCancel, cancelText }: Props) {
  return (
    <section className="flex justify-end gap-y-3 gap-x-3 mt-2.5 w-full">
      <ChacaButton
        color={type === "delete" ? "danger" : "primary"}
        size="sm"
        text={nextText}
        id="modal-submit-button"
        type="submit"
        disabled={false}
      />

      <ChacaButton
        color="cancel"
        size="sm"
        text={cancelText}
        onClick={handleCancel}
        id="modal-cancel-button"
        type="button"
        disabled={false}
      />
    </section>
  )
}
