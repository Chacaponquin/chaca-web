interface Props {
  route: string
  children: React.ReactNode
}

export default function ExternalLink({ route, children }: Props) {
  return (
    <a href={route} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
