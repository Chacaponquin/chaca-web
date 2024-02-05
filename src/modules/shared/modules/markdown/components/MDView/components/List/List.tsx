interface Props {
  children: React.ReactElement
}

export default function List({ children }: Props) {
  return <ul className="ml-3 flex flex-col mb-4 gap-y-2">{children}</ul>
}
