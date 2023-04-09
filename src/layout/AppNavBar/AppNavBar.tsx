import { Bars, Home } from "@modules/shared/assets/icons"
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { APP_ROUTES } from "@modules/shared/routes"
import { ChacaLogo } from "./components"
import { useLanguage } from "@modules/shared/hooks"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"

export default function AppNavBar() {
  const divClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex h-[50px] items-center py-[5px] px-5 cursor-pointer gap-x-2",
      {
        "fill-black text-black border-b-2 border-b-secondColor": isActive,
      },
      { "bg-white fill-black text-black hover:bg-slate-100": !isActive },
    )
  }

  const { showFieldsMenu } = useContext(DatasetsContext)

  const { HOME_TEXT, ACCOUNT_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    API_TEXT: { en: "Api", es: "Api" },
    ACCOUNT_TEXT: { en: "Account", es: "Cuenta" },
  })

  const textClass = "text-sm font-fontBold"
  const iconSize = 22

  return (
    <div className='w-full bg-white flex items-center px-12 justify-between border-b-2 border-b-grayColor esm:px-4'>
      <div className='flex items-center gap-x-2'>
        <button>{!showFieldsMenu && <Bars size={20} />}</button>
        <ChacaLogo />
      </div>

      <div className='flex items-center gap-x-8 h-full'>
        <div className='flex gap-x-3 h-full'>
          <NavLink className={divClass} to={APP_ROUTES.HOME}>
            <Home size={iconSize} />
            <p className={textClass}>{HOME_TEXT}</p>
          </NavLink>

          {/* <NavLink className={divClass} to={APP_ROUTES.DEFAULT_INIT_DOC_ROUTE}>
            <Code size={iconSize} />
            <p className={textClass}>{API_TEXT}</p>
          </NavLink>
          */}
        </div>

        <ChacaSimpleButton text={ACCOUNT_TEXT} color='gradient' size='medium' />
      </div>
    </div>
  )
}
