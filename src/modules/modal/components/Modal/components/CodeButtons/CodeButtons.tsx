import { useCode } from "@modules/modal/hooks"
import { ModalButtons } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function CodeButtons() {
  const { handleClose } = useCode()
  const { CANCEL, SAVE } = useTranslation({
    CANCEL: { en: "Cancel", es: "Cancelar" },
    SAVE: { en: "Save", es: "Guardar" },
  })

  return <ModalButtons handleCancel={handleClose} cancelText={CANCEL} nextText={SAVE} type="edit" />
}
