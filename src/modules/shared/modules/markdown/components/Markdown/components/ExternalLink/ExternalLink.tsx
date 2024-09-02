interface Props {
  to: string
  children: React.ReactNode
}

export default function ExternalLink({ to, children }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="hover:underline text-purple-5 hover:underline-offset-2"
    >
      {children}
    </a>
  )
}
