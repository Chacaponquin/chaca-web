import { X } from "@modules/app/modules/icon/components"

interface Props {
  handleClick(): void
}

export default function DeleteButton({ handleClick }: Props) {
  return (
    <button className="dark:fill-white fill-black ml-2" type="button" onClick={handleClick}>
      <X size={16} />
    </button>
  )
}
