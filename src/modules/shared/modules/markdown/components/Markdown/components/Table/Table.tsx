interface Props {
  children: React.ReactNode
}

export default function Table({ children }: Props) {
  return (
    <table className="border-collapse table-auto w-full border-[1px] border-scale-11 rounded my-4 [&>tbody>*:nth-child(even)]:bg-scale-11/20 [&>thead]:bg-scale-11/20">
      {children}
    </table>
  )
}
