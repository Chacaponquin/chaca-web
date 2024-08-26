import { ArrowRight } from "@modules/app/modules/icon/components"

interface Props {
  onClick(): void
  open: boolean
}

export default function OpenFieldsButton({ onClick, open }: Props) {
  return (
    <button
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
      }}
      className="dark:fill-white fill-black"
      onClick={onClick}
    >
      <ArrowRight size={17} />
    </button>
  )
}
