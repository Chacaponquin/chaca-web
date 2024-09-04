import clsx from "clsx"

interface Props {
  title: string
  handleClick(): void
  selected: boolean
}

export default function Section({ handleClick, selected, title }: Props) {
  const CLASS = clsx(
    "text-sm",
    "py-2.5 px-1",
    "border-b-[1px]",
    "transition-all duration-200",
    {
      "border-b-purple-6": selected,
      "border-b-transparent": !selected,
    },
    { "text-white": selected, "text-scale-9": !selected },
  )

  return (
    <button type="button" onClick={handleClick} className={CLASS}>
      <p>{title}</p>
    </button>
  )
}
