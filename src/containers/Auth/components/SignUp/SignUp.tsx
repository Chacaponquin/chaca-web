import { LoaderContainer } from "@modules/app/components/Loader"
import { Link } from "react-router-dom"
import { OtherOptionsSection } from "../../shared/components"
import { useSignUp } from "./hooks"
import { ChacaTextInput } from "@form/components"
import { useLanguage } from "@modules/app/hooks"
import { APP_ROUTES } from "@modules/app/constants"
import { LazyRoute, NoUserRoute } from "@modules/app/components"

const SignUp = () => {
  const {
    COMPLETE_FORM_TEXT,
    LOGIN_TEXT,
    WELCOME_TEXT,
    COMFIRM_PASSWORD_TEXT,
    EMAIL_TEXT,
    PASSWORD_TEXT,
    USERNAME_TEXT,
    QUESTION_TEXT,
  } = useLanguage({
    QUESTION_TEXT: { en: "You have account?", es: "Tienes una cuenta?" },
    COMPLETE_FORM_TEXT: {
      en: "Complete the form to continue",
      es: "Completa el formulario para continuar",
    },
    LOGIN_TEXT: { en: "Login", es: "Login" },
    WELCOME_TEXT: { en: "Welcome to", es: "Bienvenido a" },
    USERNAME_TEXT: { en: "Username", es: "Usuario" },
    EMAIL_TEXT: { en: "Email", es: "Email" },
    PASSWORD_TEXT: { en: "Password", es: "Contraseña" },
    COMFIRM_PASSWORD_TEXT: { en: "Comfirm Password", es: "Confirma tu contraseña" },
  })

  const { handleChange, handleSubmit, loading, signUpData } = useSignUp()

  const labelClass = "text-lg font-fontBold"

  return (
    <LazyRoute full={true}>
      <NoUserRoute>
        <div className='w-full h-screen flex'>
          <div className='py-5 px-20 esm:px-5 flex justify-center items-center xl:w-[50%] w-full'>
            <div>
              <div className='flex justify-start w-full text-lg mb-6'>
                <p className='inline mb-0 whitespace-nowrap'>{QUESTION_TEXT} </p>
                <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
                  <p className='inline mb-0 ml-2 text-secondColor'>{LOGIN_TEXT}</p>
                </Link>
              </div>

              <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                <div className='w-full flex flex-col esm:items-center'>
                  <div className='font-fontTitle text-center sm:text-6xl mb-3 whitespace-nowrap text-4xl esm:flex-wrap esm:whitespace-normal'>
                    {WELCOME_TEXT}{" "}
                    <p className='inline font-fontTitle text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor'>
                      CH-DATA!
                    </p>
                  </div>
                  <p className='text-slate-400 text-2xl esm:text-xl'>{COMPLETE_FORM_TEXT}</p>
                </div>

                <div className='py-5 flex flex-col gap-3'>
                  <div className='flex flex-col '>
                    <label htmlFor='' className={labelClass}>
                      {USERNAME_TEXT}:
                    </label>
                    <ChacaTextInput
                      placeholder='Username'
                      value={signUpData.username}
                      name='username'
                      onChange={(v) => handleChange("username", v)}
                      dimension='large'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor='' className={labelClass}>
                      {EMAIL_TEXT}:
                    </label>
                    <ChacaTextInput
                      placeholder='Email'
                      value={signUpData.email}
                      name='email'
                      onChange={(v) => handleChange("email", v)}
                      dimension='large'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor='' className={labelClass}>
                      {PASSWORD_TEXT}:
                    </label>
                    <ChacaTextInput
                      placeholder='Password'
                      value={signUpData.password}
                      name='password'
                      onChange={(v) => handleChange("password", v)}
                      type='password'
                      dimension='large'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor='' className={labelClass}>
                      {COMFIRM_PASSWORD_TEXT}:
                    </label>
                    <ChacaTextInput
                      placeholder='Comfirm Password'
                      value={signUpData.confirmPassword}
                      name='password'
                      onChange={(v) => handleChange("confirmPassword", v)}
                      type='password'
                      dimension='large'
                    />
                  </div>
                </div>

                <OtherOptionsSection loading={loading} />

                <div className='flex justify-center'>
                  <LoaderContainer loading={loading} size={50}>
                    <button className='transition-all duration-300 rounded-sm text-white bg-principal-bg hover:opacity-70 py-3 w-full text-2xl font-fontBold'>
                      Sign Up
                    </button>
                  </LoaderContainer>
                </div>
              </form>
            </div>
          </div>

          <div className='h-full xl:w-[50%]'>
            <div className='h-full w-full bg-principal-bg bg-cover bg-no-repeat'></div>
          </div>
        </div>
      </NoUserRoute>
    </LazyRoute>
  )
}

export default SignUp
