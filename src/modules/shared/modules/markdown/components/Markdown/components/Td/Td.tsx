interface Props {
  children: React.ReactElement
}

export default function Td({ children }: Props) {
  return (
    <td className="py-2 text-left rounded leading-7 border-t-[0.2px] border-t-scale-10/50">
      {children}
    </td>
  )
}
