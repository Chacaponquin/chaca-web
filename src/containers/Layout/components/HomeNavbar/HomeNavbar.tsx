import { Bars, Home } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { Link, NavLink } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"
import { ChacaLogo } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSimpleButton } from "@form/components"
import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { HomeContext } from "@containers/Home/context"

export default function HomeNavbar() {
  const divClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex items-center py-2 px-6 cursor-pointer gap-x-3.5 transition-all duration-300",
      {
        "fill-white text-white bg-secondColor dark:bg-white dark:fill-black dark:text-black rounded-full":
          isActive,
      },
      { "bg-white fill-black text-black hover:bg-slate-100": !isActive },
    )
  }

  const { smallWindow } = useContext(HomeContext)
  const { handleOpenFieldsMenu } = useContext(DatasetsContext)

  const { HOME_TEXT, ACCOUNT_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    ACCOUNT_TEXT: { en: "Account", es: "Cuenta" },
  })

  const TEXT_CLASS = "text-base font-fontMedium"
  const ICON_SIZE = 22

  return (
    <header className="w-full bg-white dark:bg-darkColorLight text-black dark:text-white flex items-center xl:px-12 px-8 justify-between esm:px-4 min-h-[55px] md:min-h-[65px] border-b-2 border-grayColor">
      <section className="flex items-center">
        {smallWindow && (
          <button onClick={handleOpenFieldsMenu} className="mr-4">
            <Bars size={20} />
          </button>
        )}

        <Link to={APP_ROUTES.ROOT}>
          <ChacaLogo />
        </Link>

        <div className="flex gap-x-3 ml-10">
          <NavLink className={divClass} to={APP_ROUTES.HOME}>
            <Home size={ICON_SIZE} />
            <p className={TEXT_CLASS}>{HOME_TEXT}</p>
          </NavLink>
        </div>
      </section>

      <section className="flex items-center gap-x-6 h-full">
        <ThemeSwitch />

        <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
          <ChacaSimpleButton text={ACCOUNT_TEXT} color="primary" size="large" />
        </Link>
      </section>
    </header>
  )
}
