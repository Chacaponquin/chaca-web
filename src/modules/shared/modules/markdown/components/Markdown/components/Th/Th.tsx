interface Props {
  children: string
}

export default function Th({ children }: Props) {
  return (
    <th className="py-3 text-lg text-center font-fontMedium px-4 font-normal border-scale-12 border-2">
      {children}
    </th>
  )
}
