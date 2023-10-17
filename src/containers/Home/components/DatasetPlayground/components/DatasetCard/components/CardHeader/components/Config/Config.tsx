import { Config as ConfigIcon } from "@modules/app/modules/icon/components"

export default function Config({
  handleInteractOpenConfig,
  name,
}: {
  handleInteractOpenConfig: (e: React.MouseEvent) => void
  name: string
}) {
  return (
    <button
      className="absolute right-4 flex items-center fill-white"
      onClick={handleInteractOpenConfig}
      id={`${name}-dataset-config-button`}
    >
      <ConfigIcon size={22} />
    </button>
  )
}
