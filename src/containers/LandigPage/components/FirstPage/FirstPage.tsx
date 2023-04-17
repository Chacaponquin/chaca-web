import { useLanguage } from "@modules/shared/modules/app/hooks"
import { StartButton } from "./components"
import { APP_IMAGES } from "@modules/shared/constant"

const FirstPage = () => {
  const { DESCRIPTION_TEXT, START } = useLanguage({
    WELCOME_TEXT: { en: "Welcome to", es: "Bienvenido a" },
    DOCS_TEXT: { en: "Read Docs", es: "Api Docs" },
    HOME_TEXT: { en: "Get Started", es: "Empezar" },
    DESCRIPTION_TEXT: {
      en: "Welcome to Chaca, a perfect tool for creating fake data for effective development. Get realistic test data and increase the efficiency of your projects.",
      es: "Bienvenido a Chaca, una herramienta perfecta para la creación de datos falsos para un desarrollo efectivo. Obtén datos de prueba realistas y aumenta le ficiencia de tus proyectos.",
    },
    START: { en: "Start", es: "Empezar" },
  })

  return (
    <div className='xl:h-screen min-h-[500px] bg-white w-full flex gap-x-8 items-center justify-center xl:bg-first-bg bg-cover bg-no-repeat bg-transparent px-10'>
      <div className='flex flex-col gap-y-5 xl:w-[600px] xl:px-10'>
        <div className='text-6xl'>
          <h1 className='font-fontTitle'>Create your Mock Data</h1>
          <h1 className='font-fontTitle mt-3'>
            with{" "}
            <p className='inline font-fontTitle uppercase text-transparent bg-clip-text bg-gradient-to-r from-principalColor to-secondColor'>
              CHACA
            </p>
          </h1>
        </div>

        <p className='text-grayStrongColor text-xl'>{DESCRIPTION_TEXT}</p>

        <div className='w-full flex'>
          <StartButton text={START} />
        </div>
      </div>

      <div className='hidden xl:block'>
        <img
          src={APP_IMAGES.LANDING_CODE.image}
          alt={APP_IMAGES.LANDING_CODE.alt}
          className='h-[700px] object-contain'
        />
      </div>
    </div>
  )
}

export default FirstPage
