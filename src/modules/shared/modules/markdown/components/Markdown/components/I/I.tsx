interface Props {
  children: React.ReactNode
}

export default function I({ children }: Props) {
  return <i className="text-white">{children}</i>
}
