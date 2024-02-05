interface Props {
  children: React.ReactElement
  href: string
}

export default function A({ href, children }: Props) {
  return <a href={href}>{children}</a>
}
