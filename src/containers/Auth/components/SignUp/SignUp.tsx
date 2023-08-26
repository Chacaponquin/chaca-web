import { useSignUp } from "./hooks"
import { LazyRoute, NoUserRoute } from "@modules/app/components"
import { Form, Panel, Redirect } from "./components"

const SignUp = () => {
  const { handleChange, handleSubmit, loading, signUpData } = useSignUp()

  return (
    <LazyRoute full={true}>
      <NoUserRoute>
        <main className="w-full h-screen flex">
          <section className="py-5 px-20 esm:px-5 flex justify-center items-center xl:w-[50%] w-full">
            <div>
              <Redirect />
              <Form
                handleChange={handleChange}
                form={signUpData}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          </section>

          <Panel />
        </main>
      </NoUserRoute>
    </LazyRoute>
  )
}

export default SignUp
