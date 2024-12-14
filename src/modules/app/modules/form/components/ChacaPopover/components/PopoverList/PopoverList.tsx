import clsx from "clsx"

interface Props {
  children: React.ReactNode
  className?: string
  height: number
}

export default function PopoverList({ className, children, height }: Props) {
  const CLASS = clsx(
    "overflow-auto",
    "mt-3.5",
    "flex flex-col",
    "dark:border-scale-7 border-[1px]",
    "p-1",
    "gap-y-0.5",
    "rounded",
    "bg-white dark:bg-scale-3",
    className,
  )

  return (
    <ul className={CLASS} style={{ maxHeight: `${height}px` }}>
      {children}
    </ul>
  )
}
