interface Props {
  children: React.ReactElement
}

export default function Table({ children }: Props) {
  return (
    <table className="border-collapse table-auto w-full border-2 border-scale-11 rounded mt-2 mb-4 [&>tbody>*:nth-child(even)]:bg-scale-11/20 [&>thead]:bg-scale-11/20">
      {children}
    </table>
  )
}
