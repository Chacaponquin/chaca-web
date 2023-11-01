import { Layout } from "@containers/Layout/components"
import { ChacaLinkButton } from "@form/components"
import { APP_ROUTES } from "@modules/app/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"

const Error404 = () => {
  const { ERROR_MESSAGE, REPORT_PROBLEM_TEXT, RETURN_HOME, DESCRIPTION } = useLanguage({
    ERROR_MESSAGE: { en: "Opps! Page Not Found", es: "Opps! No se encontró la página" },
    REPORT_PROBLEM_TEXT: { en: "Report Problem", es: "Reportar Problema" },
    RETURN_HOME: { en: "Return Home", es: "Volver" },
    DESCRIPTION: { en: "Page not found", es: "Página no encontrada" },
  })

  return (
    <Layout description={DESCRIPTION} title="Not found">
      <main className="flex items-center w-full h-screen justify-center flex-col">
        <div className="flex flex-col items-center max-w-5xl px-4">
          <h1 className="lg:text-[18rem] font-fontTitle text-transparent bg-clip-text bg-gradient-to-r from-purple-6 to-purple-8 text-center mb-0 esm:text-[10rem] sm:text-[13rem]">
            404
          </h1>

          <div className="flex flex-col items-center -translate-y-16 esm:-translate-y-12">
            <h2 className="font-fontBold uppercase pt-5 lg:text-6xl mb-0 text-center esm:text-4xl esm:py-3 sm:text-5xl">
              {ERROR_MESSAGE}
            </h2>

            <div className="flex gap-7 mt-6 esm:flex-col items-center esm:gap-3">
              <ChacaLinkButton route={APP_ROUTES.HOME} text={RETURN_HOME} type="link" />

              <ChacaLinkButton
                text={REPORT_PROBLEM_TEXT}
                route={APP_ROUTES.CONTACT_US}
                type="cancel"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Error404
