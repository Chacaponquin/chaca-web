import { ArrowLeft } from "@modules/app/modules/icon/components"

interface Props {
  handleClose(): void
}

export default function Header({ handleClose }: Props) {
  return (
    <header className="flex items-center">
      <button onClick={handleClose}>
        <ArrowLeft size={24} />
      </button>
    </header>
  )
}
