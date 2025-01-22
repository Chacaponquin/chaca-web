import clsx from "clsx"
import { ForwardedRef, forwardRef } from "react"

interface Props {
  open: boolean
  onClick(): void
}

function Button({ open, onClick }: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const CLASS = clsx(
    "px-3 py-1",
    "text-base",
    "dark:text-white text-black",
    "font-fontMedium",
    "rounded",

    { "dark:hover:bg-scale-5 hover:bg-gray-100": !open, "dark:bg-scale-5 bg-gray-100": open },
  )

  return (
    <button ref={ref} className={CLASS} onClick={onClick}>
      Menu
    </button>
  )
}

export default forwardRef<HTMLButtonElement, Props>(Button)
