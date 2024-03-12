import clsx from "clsx"

interface Props {
  text: string
  isFirst: boolean
}

export default function Item({ text, isFirst }: Props) {
  const CLASS = clsx(
    "transition-all duration-200 text-white py-3 text-lg w-full hover:bg-gray-50/20 px-8",
    { "rounded-tl-md rounded-tr-md": isFirst },
  )

  return <div className={CLASS}>{text}</div>
}
