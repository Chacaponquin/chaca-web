interface Props {
  children: React.ReactNode
}

export default function Strong({ children }: Props) {
  return <strong className="inline font-normal font-fontSemiBold">{children}</strong>
}
