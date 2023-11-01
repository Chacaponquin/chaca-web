import { Link } from "react-router-dom"

export default function BarLink({ route, text }: { route: string; text: string }) {
  return (
    <Link to={route}>
      <div className="text-xl py-1 text-white mx-5 transition-all duration-300 hover:text-purple-6">
        {text}
      </div>
    </Link>
  )
}
