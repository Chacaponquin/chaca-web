interface Props {
  children: React.ReactNode
}

export default function List({ children }: Props) {
  return <ul className="pl-2 mt-1">{children}</ul>
}
