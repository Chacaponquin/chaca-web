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
      "bg-grayColor dark:bg-darkColor": selected,
      "hover:bg-grayColor dark:hover:bg-darkColor": !selected,
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
