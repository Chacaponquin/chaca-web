import { Tooltip } from "@modules/app/components"
import { Clipboard } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"

interface Props {
  code: string
}

export default function Copy({ code }: Props) {
  const { TEXT, TIP } = useTranslation({
    TEXT: { en: "Code copied to clipboard", es: "Código copiado" },
    TIP: { en: "Copy", es: "Copiar" },
  })

  const { toastSuccess } = useToast()

  function handleCopy() {
    navigator.clipboard.writeText(code)

    toastSuccess({ id: "code-copied", message: TEXT })
  }

  return (
    <Tooltip position="top" text={TIP}>
      <button type="button" className="stroke-white" onClick={handleCopy}>
        <Clipboard size={18} />
      </button>
    </Tooltip>
  )
}
