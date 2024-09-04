interface Props {
  children: string
}

export default function H3({ children }: Props) {
  return <h3 className="text-xl mt-3 font-fontMedium text-white">{children}</h3>
}
