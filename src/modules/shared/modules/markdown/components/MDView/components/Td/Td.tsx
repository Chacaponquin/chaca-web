interface Props {
  children: React.ReactElement
}

export default function Td({ children }: Props) {
  return <td className="py-3 text-center px-4 border-scale-12 border-2">{children}</td>
}
