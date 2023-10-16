import { Bars, Home } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { Link, NavLink } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"
import { ChacaLogo } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSimpleButton } from "@form/components"
import { useContext } from "react"
import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { HomeContext } from "@containers/Home/context"
import { useDatasetServices } from "@modules/datasets/services"

export default function HomeNavbar() {
  const LINK_CLASS = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex items-center py-1.5 px-5 cursor-pointer gap-x-3.5 transition-all duration-300",
      {
        "fill-white text-white bg-secondColor dark:bg-white dark:fill-black dark:text-black rounded-full":
          isActive,
      },
      { "bg-white fill-black text-black hover:bg-slate-100": !isActive },
    )
  }

  const { smallWindow } = useContext(HomeContext)
  const { handleOpenFieldsMenu } = useDatasetServices()

  const { HOME_TEXT, ACCOUNT_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    ACCOUNT_TEXT: { en: "Account", es: "Cuenta" },
  })

  const TEXT_CLASS = "text-sm font-fontMedium"
  const ICON_SIZE = 22

  return (
    <nav className="w-full bg-white dark:bg-darkColorLight text-black dark:text-white flex items-center px-6 esm:px-4 justify-between min-h-[60px] max-h-[60px] dark:border-b-[1px] border-b-2 border-grayColor dark:border-white">
      <section className="flex items-center">
        {smallWindow && (
          <button onClick={handleOpenFieldsMenu} className="mr-4">
            <Bars size={20} />
          </button>
        )}

        <ChacaLogo />

        <div className="flex gap-x-3 ml-7">
          <NavLink className={LINK_CLASS} to={APP_ROUTES.HOME}>
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
    </nav>
  )
}
