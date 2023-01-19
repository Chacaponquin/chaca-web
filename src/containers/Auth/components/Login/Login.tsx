import { useState } from "react"
import { useLanguage } from "@modules/shared/hooks"
import { APP_ROUTES } from "@modules/shared/routes"
import { LoaderContainer } from "@modules/shared/components/Loader"
import { Link } from "react-router-dom"
import { CurveBg } from "@modules/shared/assets/background"
import clsx from "clsx"
import { OtherOptionsSection } from "../../shared/components"
import { User, Private } from "@modules/shared/assets/icons"

import "../../auth.css"
import { useLogin } from "./hooks"

const Login = () => {
  const { handleChange, handleSubmit, loading } = useLogin()

  const {
    NEW_USER_TEXT,
    SIGN_UP_TEXT,
    WELCOME_BACK_TEXT,
    LOGIN_TEXT,
    LOGIN_BUTTON_TEXT,
    FORGET_PASSWORD_BUTTON_TEXT,
  } = useLanguage({
    NEW_USER_TEXT: { en: "New User?", es: "Eres nuevo?" },
    SIGN_UP_TEXT: { es: "Regístrate", en: "Sign Up" },
    WELCOME_BACK_TEXT: { en: "Welcome Back!", es: "Bienvenido!" },
    LOGIN_TEXT: { en: "Login to continue", es: "Pon tus datos para continuar" },
    LOGIN_BUTTON_TEXT: { en: "Login", es: "Login" },
    FORGET_PASSWORD_BUTTON_TEXT: { en: "Forget Password?", es: "Olvidaste tu contraseña?" },
  })

  const buttonClass =
    "rounded-full flex justify-center items-center py-4 esm:py-3 w-[330px] esm:w-[280px] esm:text-lg text-xl font-fontBold uppercase transition-all duration-300 whitespace-nowrap hover:opacity-70"

  return (
    <div className='w-full h-screen flex flex-col py-8 px-20 esm:px-5'>
      <div className='flex justify-end w-full text-lg'>
        <p className='inline mb-0'>{NEW_USER_TEXT}</p>
        <Link to={APP_ROUTES.AUTH_ROUTES.SIGN_UP}>
          <p className='inline mb-0 ml-2 text-secondColor'>{SIGN_UP_TEXT}</p>
        </Link>
      </div>

      <div className='w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-3'>
        <div className='h-full lg:flex items-center hidden'>
          <div className='absolute top-0 left-0 h-screen -translate-x-[200px]'>
            <CurveBg />
          </div>

          <img
            src={"/images/signUp-image.png"}
            alt=''
            className='object-contain z-20 -translate-x-[50px] max-w-full'
          />
        </div>

        <div className='flex flex-col h-full justify-center z-20'>
          <div className='w-full flex flex-col esm:items-center'>
            <h1 className='font-fontExtraBold text-6xl mb-3 whitespace-nowrap esm:text-5xl'>
              {WELCOME_BACK_TEXT}
            </h1>
            <p className='text-slate-400 text-2xl esm:text-xl'>{LOGIN_TEXT}</p>
          </div>

          <form className='flex flex-col w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col w-full py-8 gap-5 esm:py-6'>
              <InputDiv type={"email"} onChange={handleChange} icon={"email"} />
              <InputDiv onChange={handleChange} type={"password"} icon={"password"} />
            </div>

            <div className='mb-4'>
              <OtherOptionsSection loading={loading} />
            </div>

            <div className='flex w-full gap-5 flex-wrap justify-center'>
              <LoaderContainer loading={loading} className='w-[50px]'>
                <button className={buttonClass + " bg-principal-bg text-white"} type='submit'>
                  {LOGIN_BUTTON_TEXT}
                </button>
              </LoaderContainer>

              {!loading && (
                <Link
                  to={APP_ROUTES.AUTH_ROUTES.FORGOT_PASSWORD}
                  className={buttonClass + " bg-slate-200 text-black"}
                >
                  {FORGET_PASSWORD_BUTTON_TEXT}
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const InputDiv = ({
  type,
  onChange,
  icon,
}: {
  icon: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const [focus, setFocus] = useState(false)

  const divClass = () => {
    return clsx("rounded-md flex w-full inputText", {
      "inputText-focus": focus,
    })
  }

  return (
    <div className={divClass()}>
      <div className='px-4 border-r-2 flex justify-center items-center'>
        {icon === "email" && <User />}
        {icon === "password" && <Private />}
      </div>

      <input
        type={type}
        className={"w-full outline-none py-3 px-5"}
        placeholder={type}
        onChange={onChange}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        required
        name={type}
      />
    </div>
  )
}

export default Login
