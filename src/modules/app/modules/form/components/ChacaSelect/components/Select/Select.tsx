import { ArrowDown } from "@modules/app/modules/icon/components"

interface Props {
  text: string
  className: string
  onClick: () => void
}

export default function Select({ text, className }: Props) {
  return (
    <button className={className}>
      <p className="pointer-events-none overflow-x-auto no-scroll">{text}</p>

      <button>
        <ArrowDown size={18} />
      </button>
    </button>
  )
}
