import { ChacaTextInput } from "@form/components"
import { ChacaSimpleButton } from "@form/components"
import { LoaderContainer } from "@modules/shared/components/Loader"
import { APP_IMAGES } from "@modules/shared/constant"
import { useAdminHome } from "./hooks"

export default function Home() {
  const { adminLoginForm, handleChangeAdminForm, handleSubmit, loading } = useAdminHome()

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-br from-principalColor to-thirdColor py-4 px-10'>
      <div className='bg-white w-[500px] py-6 px-10 shadow-lg rounded flex flex-col gap-y-5'>
        <div className='bg-transparent flex w-full justify-center'>
          <img src={APP_IMAGES.SUCCESS.image} alt={APP_IMAGES.SUCCESS.alt} className='w-[250px]' />
        </div>

        <form className='flex flex-col w-full gap-y-3'>
          <div className='flex flex-col'>
            <label htmlFor='' className='font-fontBold text-lg'>
              Email
            </label>
            <ChacaTextInput
              placeholder='Email'
              onChange={(value) => handleChangeAdminForm("email", value)}
              value={adminLoginForm.email}
              dimension='normal'
              type='email'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='' className='font-fontBold text-lg'>
              Password
            </label>
            <ChacaTextInput
              placeholder='Password'
              onChange={(value) => handleChangeAdminForm("password", value)}
              value={adminLoginForm.password}
              dimension='normal'
              type='password'
            />
          </div>
        </form>

        <div className='flex justify-center w-full'>
          <LoaderContainer loading={loading} size={35}>
            <ChacaSimpleButton
              text='Login'
              size='large'
              className='w-full text-center flex justify-center !text-xl'
              color='primary'
              onClick={handleSubmit}
            />
          </LoaderContainer>
        </div>
      </div>
    </div>
  )
}
