import clsx from "clsx"

interface Props {
  onClick(): void
  children: React.ReactNode
  handleCloseList(): void
  clickEffect: boolean
}

export default function Item({ onClick, children, clickEffect, handleCloseList }: Props) {
  const CLASS = clsx(
    "flex items-center justify-between",
    "px-5 py-3",
    "text-base",
    "cursor-pointer",
    "dark:hover:bg-scale-5 hover:bg-gray-100",
    "gap-x-5",
  )

  function handleClick() {
    onClick()
    if (clickEffect) handleCloseList()
  }

  return (
    <li className={CLASS} onClick={handleClick}>
      {children}
    </li>
  )
}
