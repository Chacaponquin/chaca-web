import { CurveBg, WaveBG } from "@modules/shared/assets/background"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "@modules/shared/routes"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"

const FirstPage = () => {
  const { DECSRIPTION_TEXT } = useLanguage({
    WELCOME_TEXT: { en: "Welcome to", es: "Bienvenido a" },
    DOCS_TEXT: { en: "Read Docs", es: "Api Docs" },
    HOME_TEXT: { en: "Get Started", es: "Empezar" },
    DECSRIPTION_TEXT: {
      en: "Create and export your mock data with your rules",
      es: "Crea y exporta tus datos demo con tus propias reglas",
    },
  })

  return (
    <div className='h-screen bg-white w-screen flex flex-col items-center justify-center xl:bg-second-bg bg-cover bg-no-repeat bg-transparent'>
      <div className='flex text-center flex-col gap-y-7 items-center'>
        <h1 className='font-fontTitle text-9xl text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor'>
          BIENVENIDO A CHACA
        </h1>
        <p className='text-black text-3xl'>{DECSRIPTION_TEXT}</p>
        <Link to={APP_ROUTES.HOME} className=''>
          <ChacaSimpleButton
            color='gradient'
            size='extra-large'
            text='Empezar'
            className='text-3xl py-3 !px-14'
          />
        </Link>
      </div>
    </div>
  )
}

export default FirstPage
