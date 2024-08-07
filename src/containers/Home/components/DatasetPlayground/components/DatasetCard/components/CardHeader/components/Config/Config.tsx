import { Tooltip } from "@modules/app/components"
import { Config as ConfigIcon } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  name: string
}

export default function Config({ name }: Props) {
  const { TEXT } = useTranslation({ TEXT: { en: "Configuration", es: "Configuración" } })

  return (
    <button
      className="absolute right-4 flex items-center fill-white z-50"
      id={`${name}-dataset-config-button`}
    >
      <Tooltip text={TEXT} position="right">
        <ConfigIcon size={20} />
      </Tooltip>
    </button>
  )
}
