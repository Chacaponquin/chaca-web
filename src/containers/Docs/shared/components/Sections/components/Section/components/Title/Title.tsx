import clsx from "clsx"

interface Props {
  title: string
}

export default function Title({ title }: Props) {
  const CLASS = clsx(
    "flex justify-between items-center",
    "rounded w-full cursor-pointer",
    "py-1.5",
    "dark:text-white",
  )

  return (
    <div className={CLASS}>
      <p className="text-base font-fontMedium">{title}</p>
    </div>
  )
}
