import { useContext } from "react"
import { Code, Home, Schema } from "@modules/shared/assets/icons"
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { APP_ROUTES } from "@modules/shared/routes"
import { UserContext } from "@modules/user/context"
import { ChacaLogo, ProfileSection } from "./components"
import { useLanguage } from "@modules/shared/hooks"

export default function AppNavBar() {
  const { actualUser } = useContext(UserContext)

  const divClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex items-center py-[5px] px-5 cursor-pointer rounded-sm duration-300 transition-all gap-x-2",
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
  const iconSize = 22

  return (
    <div className='w-full bg-white border-b-[1px] border-b-grayColor flex items-center px-12 justify-between'>
      <ChacaLogo />

      <div className='flex items-center gap-x-5'>
        <div className='flex gap-x-3'>
          <NavLink className={divClass} to={APP_ROUTES.HOME}>
            <Home size={iconSize} />
            <p className={textClass}>{HOME_TEXT}</p>
          </NavLink>

          <NavLink className={divClass} to={APP_ROUTES.DEFAULT_INIT_DOC_ROUTE}>
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
    </div>
  )
}
