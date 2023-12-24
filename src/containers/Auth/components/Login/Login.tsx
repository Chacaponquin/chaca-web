import { useLogin } from "./hooks"
import { NoUserRoute } from "@modules/app/components"
import { Form, ImageSection, PresentationText, Redirect } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Layout } from "@containers/Layout/components"

export default function Login() {
  const { handleChange, handleSubmit, loading } = useLogin()

  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: {
      en: "Register with your account in Chaca to access more features",
      es: "Regístrate con tu cuenta en Chaca para poder acceder a más funcionalidades",
    },
  })

  return (
    <Layout description={DESCRIPTION} title="Chaca | Login">
      <NoUserRoute>
        <main className="w-full h-screen flex flex-col py-8 px-20 esm:px-5 bg-white dark:bg-scale-3">
          <Redirect />

          <section className="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-3">
            <ImageSection />

            <div className="flex flex-col h-full justify-center z-20">
              <PresentationText />
              <Form loading={loading} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
          </section>
        </main>
      </NoUserRoute>
    </Layout>
  )
}
