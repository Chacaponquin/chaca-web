import clsx from "clsx"

interface Props {
  open: boolean
  onClick(): void
}

export default function Button({ open, onClick }: Props) {
  const CLASS = clsx(
    "px-4 py-1.5",
    "text-lg",
    "dark:text-white text-black",
    "font-fontMedium",
    "bg-transparent",
    "rounded",

    { "dark:hover:bg-scale-5 hover:bg-gray-100": !open, "dark:bg-scale-5 bg-gray-100": open },
  )

  return (
    <button className={CLASS} onClick={onClick}>
      Menu
    </button>
  )
}
