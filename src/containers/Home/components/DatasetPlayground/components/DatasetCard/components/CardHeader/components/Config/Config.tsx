import { Tooltip } from "@modules/app/components"
import { Config as ConfigIcon } from "@modules/app/modules/icon/components"

export default function Config({ name }: { name: string }) {
  return (
    <button
      className="absolute right-4 flex items-center fill-white z-50"
      id={`${name}-dataset-config-button`}
    >
      <Tooltip text="Configuración" position="right">
        <ConfigIcon size={22} />
      </Tooltip>
    </button>
  )
}
