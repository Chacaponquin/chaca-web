interface Props {
  children: string
}

export default function H3({ children }: Props) {
  return <h3 className="text-xl font-fontMedium mt-3 text-black">{children}</h3>
}
