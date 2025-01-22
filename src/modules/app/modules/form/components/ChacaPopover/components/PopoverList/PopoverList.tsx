import { Size } from "@modules/app/modules/form/domain"
import clsx from "clsx"

interface Props {
  children: React.ReactNode
  className?: string
  size: Size
}

export default function PopoverList({ className, children, size }: Props) {
  const CLASS = clsx(
    "overflow-auto",
    "mt-2.5",
    "flex flex-col items-center",
    "dark:border-scale-7 border-[1px]",
    "gap-y-1",
    "rounded",
    "bg-white dark:bg-scale-3",

    { "p-1.5": size === "base", "p-1": size == "sm" },

    className,
  )

  return <ul className={CLASS}>{children}</ul>
}
