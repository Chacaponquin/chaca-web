import clsx from "clsx"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function PopoverList({ className, children }: Props) {
  const CLASS = clsx(
    "overflow-auto",
    "mt-3.5",
    "flex flex-col items-center",
    "dark:border-scale-7 border-[1px]",
    "p-1.5",
    "gap-y-1",
    "rounded",
    "bg-white dark:bg-scale-3",
    className,
  )

  return <ul className={CLASS}>{children}</ul>
}
