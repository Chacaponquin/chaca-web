import { Tooltip } from "@modules/app/components"
import { Config as ConfigIcon } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ForwardedRef, forwardRef } from "react"

interface Props {
  name: string
  onClick(): void
}

function Config({ name, onClick }: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { TEXT } = useTranslation({ TEXT: { en: "Configuration", es: "Configuración" } })

  return (
    <button
      ref={ref}
      onClick={onClick}
      className="absolute right-4 flex items-center fill-white z-50"
      id={`${name}-dataset-config-button`}
    >
      <Tooltip text={TEXT} position="right">
        <ConfigIcon size={15} />
      </Tooltip>
    </button>
  )
}

export default forwardRef<HTMLButtonElement, Props>(Config)
