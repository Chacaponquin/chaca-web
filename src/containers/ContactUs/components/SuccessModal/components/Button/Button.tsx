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
      className="bg-secondColor text-white font-fontBold px-10 text-xl hover:bg-secondColor/70 transition-all duration-300 rounded py-2 esm:text-xl"
    >
      {BACK_TEXT}
    </Link>
  )
}
