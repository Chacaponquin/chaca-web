interface Props {
  children: string
}

export default function H2({ children }: Props) {
  return <h2 className="text-xl mb-1 font-fontMedium text-black">{children}</h2>
}
