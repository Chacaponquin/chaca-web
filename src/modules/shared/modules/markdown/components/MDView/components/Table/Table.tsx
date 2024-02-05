import "./style.css"

interface Props {
  children: React.ReactElement
}

export default function Table({ children }: Props) {
  return (
    <table className="border-collapse table-auto w-full border-2 border-scale-11 rounded">
      {children}
    </table>
  )
}
