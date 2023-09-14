import { ArrowRight } from "@modules/app/modules/icon/components"

export default function OpenFieldsButton({
  onClick,
  open,
}: {
  onClick: () => void
  open: boolean
}) {
  return (
    <button
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
      }}
      className="dark:fill-white fill-black"
      onClick={onClick}
    >
      <ArrowRight size={19} />
    </button>
  )
}
