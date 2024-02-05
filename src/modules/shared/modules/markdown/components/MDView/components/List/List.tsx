interface Props {
  children: React.ReactElement
}

export default function List({ children }: Props) {
  return <ul className="ml-3 list-disc flex flex-col mb-4">{children}</ul>
}
