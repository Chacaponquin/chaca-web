import clsx from "clsx"

interface Props {
  onClick: () => void
  text: string
}

export default function Item({ onClick, text }: Props) {
  const CLASS = clsx(
    "w-full",
    "px-3.5 py-1.5",
    "cursor-pointer",
    "duration-300  transition-all",
    "hover:bg-slate-200 dark:hover:bg-scale-5",
    "whitespace-nowrap",
    "rounded",
    "text-sm",
  )

  return (
    <li className={CLASS} onClick={onClick}>
      {text}
    </li>
  )
}
