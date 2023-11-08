import clsx from "clsx"

interface Props {
  onClick: () => void
  text: string
  selected: boolean
  textClass: string
  paddingClass: string
}

export default function Option({ onClick, text, selected, paddingClass, textClass }: Props) {
  const className = clsx(
    "py-2 cursor-pointer duration-300 transition-all",
    {
      "bg-scale-12 dark:bg-scale-3": selected,
      "dark:text-white": selected,
    },
    {
      "text-black dark:text-white": !selected,
      "hover:bg-scale-12 dark:hover:bg-scale-3": !selected,
    },
    textClass,
    paddingClass,
  )

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  )
}
