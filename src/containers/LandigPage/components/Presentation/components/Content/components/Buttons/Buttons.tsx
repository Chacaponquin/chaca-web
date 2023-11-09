import { APP_ROUTES } from "@modules/app/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { Link } from "react-router-dom"
import { CodeLink } from "./components"

export default function Buttons() {
  const { START } = useLanguage({ START: { en: "Get Started", es: "Empezar" } })

  return (
    <div className="flex mt-10 justify-center text-xl gap-x-7 gap-y-5 flex-wrap">
      <Link to={APP_ROUTES.HOME}>
        <button className="text-white px-10 py-3.5 rounded-full bg-purple-6 transition-all duration-200 hover:opacity-80">
          {START}
        </button>
      </Link>

      <CodeLink />
    </div>
  )
}
