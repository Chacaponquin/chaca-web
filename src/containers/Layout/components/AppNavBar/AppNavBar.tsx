import { Bars, Home } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { Link, NavLink } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"
import { ChacaLogo } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSimpleButton } from "@form/components"
import { useContext } from "react"
import { AppContext } from "@modules/app/context"
import { DatasetsContext } from "@modules/datasets/context"

export default function AppNavBar() {
  const divClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex h-[50px] items-center py-[5px] px-5 cursor-pointer gap-x-3.5",
      {
        "fill-black text-black border-b-2 border-b-secondColor": isActive,
      },
      { "bg-white fill-black text-black hover:bg-slate-100": !isActive },
    )
  }

  const { smallWindow } = useContext(AppContext)
  const { handleOpenFieldsMenu } = useContext(DatasetsContext)

  const { HOME_TEXT, ACCOUNT_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    ACCOUNT_TEXT: { en: "Account", es: "Cuenta" },
  })

  const textClass = "text-base font-fontMedium"
  const ICON_SIZE = 22

  return (
    <header className='w-full bg-white flex items-center xl:px-12 px-8 justify-between esm:px-4'>
      <div className='flex items-center gap-x-3'>
        {smallWindow && (
          <button onClick={handleOpenFieldsMenu}>
            <Bars size={20} />
          </button>
        )}
        <Link to={APP_ROUTES.ROOT}>
          <ChacaLogo />
        </Link>
      </div>

      <div className='flex items-center gap-x-6 h-full'>
        <div className='flex gap-x-3 h-full'>
          <NavLink className={divClass} to={APP_ROUTES.HOME}>
            <Home size={ICON_SIZE} />
            <p className={textClass}>{HOME_TEXT}</p>
          </NavLink>
        </div>

        <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
          <ChacaSimpleButton text={ACCOUNT_TEXT} color='primary' size='large' />
        </Link>
      </div>
    </header>
  )
}
