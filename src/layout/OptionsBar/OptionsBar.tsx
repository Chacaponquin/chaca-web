import { useContext } from "react"
import { Code, Home, Schema } from "@shared/assets/icons"
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { APP_ROUTES } from "@shared/routes"
import { UserContext } from "@shared/context"
import { ProfileSection } from "./components"
import { useLanguage } from "../../shared/hooks"

const OptionsBar = () => {
  const { actualUser } = useContext(UserContext)

  const divClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex flex-col items-center py-1 cursor-pointer rounded duration-300 transition-all",
      { "bg-gradient-to-br from-principalColor to-secondColor fill-white text-white": isActive },
      { "bg-white fill-black text-black hover:bg-slate-100": !isActive },
    )
  }

  const { API_TEXT, HOME_TEXT, MODELS_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    API_TEXT: { en: "Api", es: "Api" },
    MODELS_TEXT: { en: "Models", es: "Modelos" },
  })

  const textClass = "text-sm font-fontBold"
  const iconSize = 25

  return (
    <div className='w-[100px] min-w-[100px] h-screen bg-white flex flex-col justify-between border-r-2'>
      <div className='flex flex-col px-2 py-4 gap-1'>
        <NavLink className={divClass} to={APP_ROUTES.HOME}>
          <Home size={iconSize} />
          <p className={textClass}>{HOME_TEXT}</p>
        </NavLink>

        <NavLink className={divClass} to={APP_ROUTES.API}>
          <Code size={iconSize} />
          <p className={textClass}>{API_TEXT}</p>
        </NavLink>

        {actualUser && (
          <NavLink className={divClass} to={APP_ROUTES.MODELS}>
            <Schema size={iconSize} />
            <p className={textClass}>{MODELS_TEXT}</p>
          </NavLink>
        )}
      </div>

      <ProfileSection />
    </div>
  )
}

export default OptionsBar
