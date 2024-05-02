interface Props {
  children: React.ReactNode
}

export default function ListItem({ children }: Props) {
  return (
    <li className="flex items-start text-sm gap-x-2.5">
      <div
        className="rounded-full bg-white"
        style={{ minWidth: "5px", minHeight: "5px", transform: `translateY(7px)` }}
      ></div>
      {children}
    </li>
  )
}
