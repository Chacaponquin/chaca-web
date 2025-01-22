import { Link } from "react-router-dom"

interface Props {
  to: string
  children: React.ReactNode
}

export default function A({ to, children }: Props) {
  return (
    <Link className="text-purple-6 hover:underline hover:underline-offset-2" to={to}>
      {children}
    </Link>
  )
}
