import { Link } from "react-router-dom"

interface Props {
  children: React.ReactElement
  href: string
  title: string
}

export default function A({ href, children, title }: Props) {
  return (
    <Link to={href} title={title} className="underline text-purple-5 underline-offset-2">
      {children}
    </Link>
  )
}
