interface Props {
  children: React.ReactNode
}

export default function Th({ children }: Props) {
  return (
    <th className="py-1 rounded text-center font-fontMedium px-4 font-normal border-scale-12 border-[1px]">
      {children}
    </th>
  )
}
