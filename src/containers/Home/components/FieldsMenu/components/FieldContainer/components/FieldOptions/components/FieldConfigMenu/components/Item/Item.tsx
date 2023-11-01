export default function Item({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <li
      className="cursor-pointer duration-300 w-full transition-all px-5 py-1.5 text-md whitespace-nowrap hover:bg-slate-200 dark:hover:bg-scale-5"
      onClick={onClick}
    >
      {text}
    </li>
  )
}
