interface Props {
  children: React.ReactNode
}

export default function Table({ children }: Props) {
  return <table className="border-collapse table-auto w-full rounded my-4">{children}</table>
}
