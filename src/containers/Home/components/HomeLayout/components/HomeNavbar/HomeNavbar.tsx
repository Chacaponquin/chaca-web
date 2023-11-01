import { Link } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"
import { ChacaLogo, OpenFields } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSimpleButton } from "@form/components"
import { useContext } from "react"
import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { HomeContext } from "@containers/Home/context"
import { useUser } from "@modules/user/hooks"
import { useDatasets } from "@modules/datasets/hooks"

export default function HomeNavbar() {
  const { smallWindow } = useContext(HomeContext)
  const { actualUser } = useUser()
  const { datasets } = useDatasets()

  const { ACCOUNT_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    ACCOUNT_TEXT: { en: "Account", es: "Cuenta" },
  })

  return (
    <nav className="w-full bg-white dark:bg-scale-5 text-black dark:text-white flex items-center px-6 esm:px-4 justify-between min-h-[65px] max-h-[65px] dark:border-b-[1px] dark:border-scale-3 border-b-2 border-scale-5 dark:border-white">
      <section className="flex items-center">
        {smallWindow && datasets.length > 0 && <OpenFields />}

        <ChacaLogo />
      </section>

      <section className="flex items-center gap-x-6 h-full">
        <ThemeSwitch />

        {!actualUser && (
          <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
            <ChacaSimpleButton text={ACCOUNT_TEXT} color="primary" size="large" />
          </Link>
        )}
      </section>
    </nav>
  )
}
