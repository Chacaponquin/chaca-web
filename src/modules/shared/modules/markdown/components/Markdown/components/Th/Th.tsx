interface Props {
  children: React.ReactNode
}

export default function Th({ children }: Props) {
  return (
    <th className="py-1 rounded pr-8 pb-1.5 text-left font-fontMedium font-normal">{children}</th>
  )
}
