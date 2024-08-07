import clsx from "clsx"

interface Props {
  children: React.ReactNode
}

export default function MiniCode({ children }: Props) {
  const CLASS = clsx(
    "font-fontCodeMedium",
    "rounded",
    "dark:bg-scale-4 bg-black-haze-50",
    "py-0.5 px-1.5",
    "text-xs",
    "dark:border-none border-[1px] border-black-haze-300",
  )

  return <code className={CLASS}>{children}</code>
}
