import { useContext, useState } from "react"
import { useLanguage, usePost } from "../../../../shared/hooks"
import { API_ROUTES, APP_ROUTES } from "../../../../shared/routes"
import LoaderContainer from "../../../../shared/components/Loader/LoaderContainer/LoaderContainer"
import { toast } from "react-toastify"
import { UserContext } from "../../../../shared/context/UserContext"
import { InputText } from "primereact/inputtext"
import { Link } from "react-router-dom"
import OtherOptionsSection from "../../shared/components/OtherOptionsSection"

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  })

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

  const { handleSignIn } = useContext(UserContext)

  const [signUpUser, { loading }] = usePost<string>({
    url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
    onCompleted: (userToken) => {
      handleSignIn(userToken)
    },
    onError: (error) => {
      const errorObject = error?.response?.data as any
      if (errorObject) toast.error(errorObject.error)
      else toast.error("Hubo un error en la creacion del usuario")
    },
    body: signUpData,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (signUpData.password === signUpData.comfirmPassword) {
      signUpUser()
    } else throw toast.error("No coinciden las contraseñas", {})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }

  const inputClass = "py-2 px-5 font-fontRegular text-base esm:px-3 esm:py-1 esm:text-sm"
  const labelClass = "text-lg font-fontBold"

  return (
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
              <div className='font-fontExtraBold sm:text-6xl mb-3 whitespace-nowrap text-4xl exsm:text-3xl'>
                {WELCOME_TEXT}
                <h1 className='inline font-fontExtraBold ml-3 text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor'>
                  CH-DATA!
                </h1>
              </div>
              <p className='text-slate-400 text-2xl esm:text-xl'>{COMPLETE_FORM_TEXT}</p>
            </div>

            <div className='py-5 flex flex-col gap-3'>
              <div className='flex flex-col '>
                <label htmlFor='' className={labelClass}>
                  {USERNAME_TEXT}:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='username'
                  type={"text"}
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className={labelClass}>
                  {EMAIL_TEXT}:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='email'
                  type={"email"}
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className={labelClass}>
                  {PASSWORD_TEXT}:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='password'
                  type={"password"}
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className={labelClass}>
                  {COMFIRM_PASSWORD_TEXT}:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='comfirmPassword'
                  type={"password"}
                  onChange={handleChange}
                />
              </div>
            </div>

            <OtherOptionsSection loading={loading} />

            <div className='flex justify-center'>
              <LoaderContainer loading={loading} className={"w-[50px]"}>
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
  )
}

export default SignUp
