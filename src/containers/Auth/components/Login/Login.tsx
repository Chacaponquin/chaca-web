import { useLogin } from "./hooks"
import { LazyRoute, NoUserRoute } from "@modules/app/components"

import "../../auth.css"
import { Form, ImageSection, PresentationText, Redirect } from "./components"

const Login = () => {
  const { handleChange, handleSubmit, loading } = useLogin()

  return (
    <LazyRoute full={true}>
      <NoUserRoute>
        <main className="w-full h-screen flex flex-col py-8 px-20 esm:px-5">
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
    </LazyRoute>
  )
}

export default Login
