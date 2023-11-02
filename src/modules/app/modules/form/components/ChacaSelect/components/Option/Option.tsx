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
      "bg-scale-5 dark:bg-scale-9": selected,
      "hover:bg-scale-5 dark:hover:bg-scale-9": !selected,
    },
    "text-white dark:text-white",
    textClass,
    paddingClass,
  )

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  )
}
