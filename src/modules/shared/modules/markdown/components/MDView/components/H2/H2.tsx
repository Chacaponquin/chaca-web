interface Props {
  children: string
}

export default function H2({ children }: Props) {
  return <h2 className="text-3xl mb-2 mt-5 font-fontMedium">{children}</h2>
}
