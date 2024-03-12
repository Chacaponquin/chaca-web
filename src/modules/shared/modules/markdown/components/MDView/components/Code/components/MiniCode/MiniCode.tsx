import clsx from "clsx"

interface Props {
  content: string
}

export default function MiniCode({ content }: Props) {
  const CLASS = clsx(
    "inline",
    "bg-[#f6f7f8] dark:bg-scale-11/20",
    "py-0.5 px-1.5",
    "text-inherit",
    "border-[.1rem] border-scale-[#0000001a] dark:border-none",
    "rounded",
    "font-fontCodeMedium",
    "w-max",
  )

  return <pre className={CLASS}>{content}</pre>
}
