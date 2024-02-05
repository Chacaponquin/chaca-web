import clsx from "clsx"

interface Props {
  title: string
  handleChangeSelectedDoc(): void
  selected: boolean
}

export default function SubSection({ title, handleChangeSelectedDoc, selected }: Props) {
  const BUTTON_CLASS = clsx(
    "flex w-full",
    "px-3 py-1",
    "text-base",
    "rounded",
    {
      "duration-300 hover:bg-scale-11/30 transition-all": !selected,
      "bg-scale-11/30": selected,
    },
    { "text-purple-6": selected, "text-scale-8": !selected },
  )

  return (
    <li className="w-full">
      <button className={BUTTON_CLASS} onClick={handleChangeSelectedDoc}>
        {title}
      </button>
    </li>
  )
}
