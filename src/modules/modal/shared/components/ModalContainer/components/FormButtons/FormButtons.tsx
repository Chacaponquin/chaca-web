import { useModal } from "@modules/modal/hooks"
import { ModalButtons } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  type: "delete" | "edit"
  nextText: string
}

export default function FormButtons({ type, nextText }: Props) {
  const { handleCloseModal } = useModal()
  const { CANCEL_TEXT } = useTranslation({ CANCEL_TEXT: { en: "Cancel", es: "Cancelar" } })

  return (
    <ModalButtons
      type={type}
      nextText={nextText}
      cancelText={CANCEL_TEXT}
      handleCancel={handleCloseModal}
    />
  )
}
