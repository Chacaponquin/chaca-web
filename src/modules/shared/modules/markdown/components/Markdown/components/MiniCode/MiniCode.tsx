import clsx from "clsx"

interface Props {
  children: React.ReactNode
}

export default function MiniCode({ children }: Props) {
  const CLASS = clsx(
    "inline",
    "bg-[#f6f7f8] dark:bg-scale-11/20",
    "py-0.5 px-1.5",
    "border-[.1rem] border-scale-[#0000001a] dark:border-none",
    "rounded",
    "font-fontCodeMedium",
    "w-max",
  )

  return <code className={CLASS}>{children}</code>
}
