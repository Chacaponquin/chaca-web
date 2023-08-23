import { Config as ConfigIcon } from "@modules/app/modules/icon/components"

export default function Config({
  handleInteractOpenConfig,
}: {
  handleInteractOpenConfig: (e: React.MouseEvent) => void
}) {
  return (
    <button className='absolute right-7' onClick={handleInteractOpenConfig}>
      <ConfigIcon size={22} />
    </button>
  )
}
