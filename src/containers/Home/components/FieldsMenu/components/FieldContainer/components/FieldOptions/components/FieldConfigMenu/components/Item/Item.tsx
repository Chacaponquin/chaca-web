import clsx from "clsx"

export default function Item({ onClick, text }: { onClick: () => void; text: string }) {
  const className = clsx(
    "cursor-pointer duration-300 w-full transition-all px-5 py-1.5 text-md whitespace-nowrap hover:bg-slate-200",
  )

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  )
}
