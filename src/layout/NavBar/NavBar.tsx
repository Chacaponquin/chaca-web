import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { APP_ROUTES } from "@modules/shared/routes"
import { useLanguage } from "@modules/shared/hooks"
import { APP_IMAGES } from "@modules/shared/constant"

const NavBar = () => {
  const UI_TEXT = useLanguage({ ACCOUNT_TEXT: { en: "Account", es: "Cuenta" } })

  const { CONTACT_US_TEXT, DOCS_TEXT, HOME_TEXT } = useLanguage({
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
    <div className='absolute top-0 w-full py-4 px-6 esm:px-0 esm:py-0 bg-transparent z-[53] mb-6'>
      <div className='flex w-full shadow-lg rounded-sm px-8 py-3 bg-white z-50 esm:px-0 justify-end'>
        <div className='flex w-full items-center gap-8 justify-between'>
          <div className='flex items-center gap-x-3'>
            <img
              src={APP_IMAGES.LOGO.image}
              alt={APP_IMAGES.LOGO.alt}
              className='object-cover w-[35px]'
            />
            <h1 className='font-fontBold text-lg uppercase'>Chaca</h1>
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
                <ChacaSimpleButton color='primary' size='large' text={UI_TEXT.ACCOUNT_TEXT} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
