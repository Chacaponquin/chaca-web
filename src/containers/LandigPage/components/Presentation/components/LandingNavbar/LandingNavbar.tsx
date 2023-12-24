import { useTranslation } from "@modules/app/modules/language/hooks"
import { APP_ROUTES } from "@modules/app/constants"
import { BarLink, Logo, RightSide } from "./components"

export default function LandingNavbar() {
  const { HOME_TEXT, CONTACT_US_TEXT } = useTranslation({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    DOCS_TEXT: { en: "Docs", es: "Docs" },
    CONTACT_US_TEXT: { en: "Contact Us", es: "Contáctanos" },
  })

  const LINKS = [
    { route: APP_ROUTES.HOME, title: HOME_TEXT },
    { route: APP_ROUTES.CONTACT_US, title: CONTACT_US_TEXT },
  ]

  return (
    <nav className="flex w-full items-center justify-between py-6 px-10 z-50 bg-transparent gap-8 esm:px-5">
      <Logo />

      <div className="xl:flex hidden items-center gap-1">
        {LINKS.map((link, i) => (
          <BarLink route={link.route} key={i} text={link.title} />
        ))}
      </div>

      <RightSide />
    </nav>
  )
}
