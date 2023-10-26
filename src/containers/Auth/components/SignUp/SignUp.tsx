import { useSignUp } from "./hooks"
import { NoUserRoute } from "@modules/app/components"
import { Form, Panel, Redirect } from "./components"
import { Layout } from "@containers/Layout/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function SignUp() {
  const { handleChange, handleSubmit, loading, signUpData } = useSignUp()
  const { DESCRIPTION } = useLanguage({
    DESCRIPTION: {
      en: "Create your account in Chaca to access more features",
      es: "Crea tu cuenta en Chaca para poder acceder a más funcionalidades",
    },
  })

  return (
    <NoUserRoute>
      <Layout description={DESCRIPTION} title="Chaca | SignUp">
        <main className="w-full h-screen flex">
          <section className="py-10 px-20 esm:px-5 flex justify-center items-center xl:w-[50%] w-full flex-col">
            <Redirect />
            <Form
              handleChange={handleChange}
              form={signUpData}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </section>

          <Panel />
        </main>
      </Layout>
    </NoUserRoute>
  )
}
