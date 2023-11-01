import { APP_ROUTES } from "@modules/app/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { Link } from "react-router-dom"

export default function StartButton() {
  const { START_TEXT } = useLanguage({ START_TEXT: { en: "Start", es: "Empezar" } })

  return (
    <Link to={APP_ROUTES.HOME}>
      <button className="text-white px-8 py-3 transition-all duration-300 hover:opacity-80 font-fontMedium bg-purple-6 text-lg rounded-full">
        <p>{START_TEXT}</p>
      </button>
    </Link>
  )
}
