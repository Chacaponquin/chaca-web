import clsx from "clsx"

interface Props {
  onClick?: () => void
  children: React.ReactNode
  handleCloseList(): void
  clickEffect: boolean
}

export default function Item({ onClick, children, clickEffect, handleCloseList }: Props) {
  const CLASS = clsx(
    "flex items-center justify-between",
    "px-4 py-2",
    "text-sm",
    "cursor-pointer",
    "dark:hover:bg-scale-5 hover:bg-gray-100",
    "gap-x-7",
    "rounded",
  )

  function handleClick() {
    if (onClick) onClick()
    if (clickEffect) handleCloseList()
  }

  return (
    <li className={CLASS} onClick={handleClick}>
      {children}
    </li>
  )
}
