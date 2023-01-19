import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { APP_ROUTES } from "@modules/shared/routes"
import { useLanguage } from "@modules/shared/hooks"

const NavBar = () => {
  const UI_TEXT = useLanguage({ ACCOUNT_TEXT: { en: "Account", es: "Cuenta" } })

  const links = [
    { route: APP_ROUTES.HOME, title: "Home" },
    { route: APP_ROUTES.DOCS, title: "Docs" },
    { route: APP_ROUTES.API, title: "Api" },
    { route: APP_ROUTES.CONTACT_US, title: "Contact Us" },
  ]

  return (
    <div className='w-full py-4 px-8 esm:px-0 esm:py-0 bg-transparent z-[53] mb-6'>
      <div className='flex w-full shadow-lg rounded px-8 py-3 bg-white z-50 esm:px-0 justify-end'>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-11'>
            {links.map((link) => (
              <Link to={link.route} key={uuid()}>
                <div className='font-fontBold text-lg transition-all duration-300 hover:text-black text-slate-500'>
                  {link.title}
                </div>
              </Link>
            ))}
          </div>

          <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
            <ChacaSimpleButton color='primary' size='large' text={UI_TEXT.ACCOUNT_TEXT} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
