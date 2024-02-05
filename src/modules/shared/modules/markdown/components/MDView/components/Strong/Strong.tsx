interface Props {
  children: string
}

export default function Strong({ children }: Props) {
  return <strong className="text-black inline font-normal font-fontMedium">{children}</strong>
}
