import { APP_ROUTES } from "@modules/app/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { Link } from "react-router-dom"

export default function Button() {
  const { BACK_TEXT } = useLanguage({
    BACK_TEXT: { en: "Go Back", es: "Volver" },
  })

  return (
    <Link
      to={APP_ROUTES.ROOT}
      className="bg-purple-7 text-white font-fontBold px-6 text-xl hover:bg-purple-7/70 transition-all duration-300 rounded py-2 esm:text-xl"
    >
      {BACK_TEXT}
    </Link>
  )
}
