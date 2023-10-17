import { Bars } from "@modules/app/modules/icon/components"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"
import { ChacaLogo } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSimpleButton } from "@form/components"
import { useContext } from "react"
import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { HomeContext } from "@containers/Home/context"
import { useDatasetServices } from "@modules/datasets/services"

export default function HomeNavbar() {
  const { smallWindow } = useContext(HomeContext)
  const { handleOpenFieldsMenu } = useDatasetServices()

  const { ACCOUNT_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    ACCOUNT_TEXT: { en: "Account", es: "Cuenta" },
  })

  return (
    <nav className="w-full bg-white dark:bg-darkColorLight text-black dark:text-white flex items-center px-6 esm:px-4 justify-between min-h-[65px] max-h-[65px] dark:border-b-[1px] border-b-2 border-grayColor dark:border-white">
      <section className="flex items-center">
        {smallWindow && (
          <button onClick={handleOpenFieldsMenu} className="mr-4">
            <Bars size={20} />
          </button>
        )}

        <ChacaLogo />
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
