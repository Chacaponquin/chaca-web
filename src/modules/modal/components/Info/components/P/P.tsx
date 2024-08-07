interface Props {
  children: React.ReactNode
}

export default function P({ children }: Props) {
  return <p className="text-sm mb-0.5">{children}</p>
}
