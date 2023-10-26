import { ArrowDown } from "@modules/app/modules/icon/components"

interface Props {
  text: string
  className: string
  onClick: () => void
}

export default function Select({ text, className }: Props) {
  return (
    <button className={className} type="button">
      <p className="pointer-events-none overflow-x-auto no-scroll">{text}</p>

      <div className="stroke-black dark:stroke-white">
        <ArrowDown size={18} />
      </div>
    </button>
  )
}
