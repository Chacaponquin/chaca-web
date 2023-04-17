import { useLanguage } from "@modules/shared/modules/app/hooks"
import { StartButton } from "./components"

const FirstPage = () => {
  const { DECSRIPTION_TEXT, START } = useLanguage({
    WELCOME_TEXT: { en: "Welcome to", es: "Bienvenido a" },
    DOCS_TEXT: { en: "Read Docs", es: "Api Docs" },
    HOME_TEXT: { en: "Get Started", es: "Empezar" },
    DECSRIPTION_TEXT: {
      en: "Create and export your mock data with your rules",
      es: "Crea y exporta tus datos demo con tus propias reglas",
    },
    START: { en: "Start", es: "Empezar" },
  })

  return (
    <div className='xl:h-screen bg-white w-screen flex flex-col items-center justify-center xl:bg-second-bg bg-cover bg-no-repeat bg-transparent pb-10 pt-32 px-10'>
      <div className='flex text-center flex-col gap-y-7 items-center'>
        <h1 className='font-fontTitle xl:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor esm:text-6xl text-7xl'>
          BIENVENIDO A CHACA
        </h1>
        <p className='xl:text-3xl text-2xl esm:text-xl text-grayStrongColor'>{DECSRIPTION_TEXT}</p>
        <StartButton text={START} />
      </div>
    </div>
  )
}

export default FirstPage
