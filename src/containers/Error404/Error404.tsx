import { ChacaLinkButton } from "@form/components"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import { APP_ROUTES } from "@modules/shared/routes/app/APP_ROUTES"

const Error404 = () => {
  const { ERROR_MESSAGE, REPORT_PROBLEM_TEXT } = useLanguage({
    ERROR_MESSAGE: { en: "Opps! Page Not Found", es: "Opps! No se encontró la página" },
    REPORT_PROBLEM_TEXT: { en: "Report Problem", es: "Reportar Problema" },
  })

  return (
    <div className='flex items-center w-full h-screen justify-center flex-col'>
      <div className='flex flex-col items-center max-w-5xl px-4'>
        <h1 className='lg:text-[18rem] font-fontTitle text-transparent bg-clip-text bg-gradient-to-r from-principalColor to-thirdColor text-center mb-0 esm:text-[10rem] sm:text-[13rem]'>
          404
        </h1>

        <div className='flex flex-col items-center -translate-y-16 esm:-translate-y-12'>
          <h2 className='font-fontBold uppercase pt-5 lg:text-6xl mb-0 text-center esm:text-4xl esm:py-3 sm:text-5xl'>
            {ERROR_MESSAGE}
          </h2>

          <div className='flex gap-7 mt-6 esm:flex-col items-center esm:gap-3'>
            <ChacaLinkButton route={APP_ROUTES.HOME} text='Return Home' type='link' />

            <ChacaLinkButton
              text={REPORT_PROBLEM_TEXT}
              route={APP_ROUTES.CONTACT_US}
              type='cancel'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404
