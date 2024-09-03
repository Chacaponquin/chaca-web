import { Clipboard } from "@modules/app/modules/icon/components"

interface Props {
  handleClick(): void
}

export default function Copy({ handleClick }: Props) {
  return (
    <button type="button" className="stroke-white" onClick={handleClick}>
      <Clipboard size={16} />
    </button>
  )
}
