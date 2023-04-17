import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"
import { ChacaSimpleButton } from "@form/components"
import { APP_ROUTES } from "@modules/shared/routes"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { APP_IMAGES } from "@modules/shared/constant"

export default function LandingNavBar() {
  const UI_TEXT = useLanguage({ ACCOUNT_TEXT: { en: "Account", es: "Cuenta" } })

  const { HOME_TEXT } = useLanguage({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    DOCS_TEXT: { en: "Docs", es: "Docs" },
    CONTACT_US_TEXT: { en: "Contact Us", es: "Contactanos" },
  })

  const links = [
    { route: APP_ROUTES.HOME, title: HOME_TEXT },
    // { route: APP_ROUTES.DOCS, title: DOCS_TEXT },
    // { route: APP_ROUTES.CONTACT_US, title: CONTACT_US_TEXT },
  ]

  return (
    <nav className='flex w-full justify-center rounded-sm py-3 bg-white px-10 z-[53]'>
      <div className='flex items-center gap-8 justify-between max-w-[1000px] w-full'>
        <div className='flex items-center gap-x-3'>
          <img
            src={APP_IMAGES.LOGO.image}
            alt={APP_IMAGES.LOGO.alt}
            className='object-cover w-[40px]'
          />
          <h1 className='font-fontBold text-lg uppercase esm:hidden'>Chaca</h1>
        </div>

        <div className='flex items-center gap-x-3'>
          <div className='flex items-center gap-1'>
            {links.map((link) => (
              <Link to={link.route} key={uuid()}>
                <div className='text-lg py-1 mx-5 transition-all duration-300 hover:text-principalColor'>
                  {link.title}
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
              <ChacaSimpleButton color='gradient' size='large' text={UI_TEXT.ACCOUNT_TEXT} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
