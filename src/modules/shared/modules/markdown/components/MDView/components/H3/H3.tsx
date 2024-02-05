interface Props {
  children: string
}

export default function H3({ children }: Props) {
  return <h3 className="text-2xl mb-2 mt-5 font-fontSemiBold">{children}</h3>
}
