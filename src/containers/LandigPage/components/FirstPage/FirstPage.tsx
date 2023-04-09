import { CurveBg, WaveBG } from "@modules/shared/assets/background"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "@modules/shared/routes"
import { ChacaArrowButton } from "@modules/shared/components/ChacaButton"
import { useLanguage } from "@modules/shared/hooks"

const FirstPage = () => {
  const UI_TEXT = useLanguage({
    WELCOME_TEXT: { en: "Welcome to", es: "Bienvenido a" },
    DOCS_TEXT: { en: "Read Docs", es: "Api Docs" },
    HOME_TEXT: { en: "Get Started", es: "Empezar" },
  })

  return (
    <div className='h-screen w-screen flex flex-col justify-center'>
      <div className='h-screen w-full absolute top-0 left-0 -z-10 xl:block hidden'>
        <CurveBg />
      </div>

      <div className='absolute w-full top-0 xl:hidden block h-screen overflow-y-hidden -z-10'>
        <div className='absolute bottom-0 w-full'>
          <WaveBG />
        </div>
      </div>

      <div className='w-screen flex justify-center lg:justify-end xl:px-20 esm:px-4 md:px-10 h-full'>
        <div className='flex flex-col justify-center items-center xl:items-end lg:text-6xl gap-3 sm:text-7xl text-6xl exsm:text-5xl h-full'>
          <div className='flex items-center gap-[10px] esm:flex-col'>
            <h1 className='font-fontExtraBold whitespace-nowrap uppercase'>
              {UI_TEXT.WELCOME_TEXT}
            </h1>
            <h1 className='font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap'>
              CHACA
            </h1>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-10 mt-5 text-2xl esm:gap-3 exsm:flex-col-reverse esm:text-xl'>
            <Link to={APP_ROUTES.HOME}>
              <ChacaArrowButton text={UI_TEXT.HOME_TEXT} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
