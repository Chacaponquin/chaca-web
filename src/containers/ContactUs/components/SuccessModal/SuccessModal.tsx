import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/hooks"
import { APP_ROUTES } from "@modules/shared/routes"
import { Link } from "react-router-dom"

export default function SuccessModal() {
  const { BACK_TEXT, THANKS_TEXT, SECOND_TEXT } = useLanguage({
    BACK_TEXT: { en: "Go Back", es: "Volver" },
    THANKS_TEXT: { en: "Thanks for your message!!!", es: "Gracias por su mensaje!!!" },
    SECOND_TEXT: {
      en: "We will answer you soon as possible",
      es: "Te responderemos lo más rápido posible",
    },
  })

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white/40 '>
      <div className='py-6 px-20 bg-white shadow-lg rounded-md flex flex-col items-center esm:px-10 max-w-[95%]'>
        <img
          src={APP_IMAGES.SUCCESS.image}
          alt={APP_IMAGES.SUCCESS.alt}
          className='object-contain w-[250px]'
        />
        <h1 className='uppercase text-4xl font-fontExtraBold mb-1 esm:text-3xl'>{THANKS_TEXT}</h1>
        <p className='mb-5 text-xl text-gray-500 esm:text-lg'>{SECOND_TEXT}</p>

        <Link
          to={APP_ROUTES.ROOT}
          className='bg-secondColor text-white font-fontBold px-10 text-2xl hover:bg-secondColor/70 transition-all duration-300 rounded-md py-2 esm:text-xl'
        >
          {BACK_TEXT}
        </Link>
      </div>
    </div>
  )
}
