interface Props {
  children: React.ReactElement
}

export default function Td({ children }: Props) {
  return (
    <td className="py-1.5 text-center px-4 border-scale-12 border-[1px] leading-7">{children}</td>
  )
}
