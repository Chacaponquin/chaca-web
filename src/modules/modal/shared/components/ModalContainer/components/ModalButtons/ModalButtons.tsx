import { ChacaSimpleButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  nextText: string
  type: "delete" | "edit"
}

export default function ModalButtons({ nextText, type }: Props) {
  const { handleCloseModal } = useModal()
  const { CANCEL_TEXT } = useTranslation({ CANCEL_TEXT: { en: "Cancel", es: "Cancelar" } })

  return (
    <section className="grid grid-cols-2 esm:grid-cols-1 gap-y-3 gap-x-3 mt-5 w-full">
      <ChacaSimpleButton
        color={type === "delete" ? "danger" : "primary"}
        size="lg"
        text={nextText}
        full={true}
        id="modal-submit-button"
        type="submit"
      />

      <ChacaSimpleButton
        color="cancel"
        size="lg"
        text={CANCEL_TEXT}
        onClick={handleCloseModal}
        full={true}
        id="modal-cancel-button"
        type="button"
      />
    </section>
  )
}
