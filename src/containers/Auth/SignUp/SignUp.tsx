import React, { useContext, useState } from 'react'
import { usePost } from '../../../shared/hooks/usePost'
import { API_ROUTES } from '../../../shared/routes/api/API_ROUTES'
import LoaderContainer from '../../../shared/components/Loader/LoaderContainer'
import { toast, ToastContainer } from 'react-toastify'
import { UserContext } from '../../../shared/context/UserContext'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../../shared/routes/app/APP_ROUTES'
import OtherOptionsSection from '../components/OtherOptionsSection'

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    comfirmPassword: '',
  })

  const { handleSignIn } = useContext(UserContext)

  const [signUpUser, { loading }] = usePost<{ userToken: string }>({
    url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
    onCompleted: ({ userToken }) => {
      handleSignIn(userToken)
    },
    onError: (error) => {
      const errorObject = error?.response?.data as any
      if (errorObject) toast.error(errorObject.error)
      else toast.error('Hubo un error en la creacion del usuario')
    },
    body: signUpData,
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (signUpData.password === signUpData.comfirmPassword) {
      signUpUser()
    } else throw toast.error('No coinciden las contraseñas', {})
  }

  const handleChange = (e: any) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }

  const inputClass = 'py-2 px-5 font-fontRegular text-base esm:px-3 esm:py-1 esm:text-sm'
  const labelClass = 'text-lg font-fontBold'

  return (
    <div className='w-full h-screen flex'>
      <ToastContainer />
      <div className='py-5 px-20 esm:px-5 flex justify-center items-center xl:w-[50%] w-full'>
        <div>
          <div className='flex justify-start w-full text-lg mb-6'>
            <p className='inline mb-0 whitespace-nowrap'>You have account? </p>
            <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
              <p className='inline mb-0 ml-2 text-secondColor'>Login</p>
            </Link>
          </div>

          <form className='flex flex-col w-full' onSubmit={handleSubmit}>
            <div className='w-full flex flex-col esm:items-center'>
              <div className='font-fontExtraBold sm:text-6xl mb-3 whitespace-nowrap text-4xl exsm:text-3xl'>
                Welcome to
                <h1 className='inline font-fontExtraBold ml-3 text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor'>
                  CH-DATA!
                </h1>
              </div>
              <p className='text-slate-400 text-2xl esm:text-xl'>Complete the form to continue</p>
            </div>

            <div className='py-5 flex flex-col gap-3'>
              <div className='flex flex-col '>
                <label htmlFor='' className={labelClass}>
                  Username:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='username'
                  type={'text'}
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className={labelClass}>
                  Email:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='email'
                  type={'email'}
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className={labelClass}>
                  Password:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='password'
                  type={'password'}
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className={labelClass}>
                  Comfirm Password:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name='comfirmPassword'
                  type={'password'}
                  onChange={handleChange}
                />
              </div>
            </div>

            <OtherOptionsSection loading={loading} />

            <div className='flex justify-center'>
              <LoaderContainer loading={loading} className={'w-[50px]'}>
                <button className='transition-all duration-300 rounded-md text-white bg-principal-bg hover:opacity-70 py-3 w-full text-2xl font-fontBold'>
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
