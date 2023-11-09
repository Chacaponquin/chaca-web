import { APP_ROUTES } from "@modules/app/constants"
import { ArrowRight } from "@modules/app/modules/icon/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function StartButton() {
  const [isHover, setIsHover] = useState(false)

  const { START_TEXT } = useLanguage({ START_TEXT: { en: "Start", es: "Empezar" } })

  return (
    <Link to={APP_ROUTES.HOME}>
      <button
        className="text-white pl-8 esm:pl-6 esm:pr-3.5 pr-5 py-3 esm:py-2.5 transition-all duration-300 hover:opacity-80 font-fontMedium bg-purple-6 esm:text-base text-lg rounded-full flex gap-x-3 items-center fill-white"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p>{START_TEXT}</p>

        <div
          className="transition-all duration-200"
          style={{ transform: `translateX(${isHover ? "4px" : "0px"})` }}
        >
          <ArrowRight size={23} />
        </div>
      </button>
    </Link>
  )
}
