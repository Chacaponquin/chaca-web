import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { LoaderContainer } from "@modules/shared/components/Loader"
import { ChacaIconButton } from "@modules/shared/components/ChacaButton"
import { Send } from "@modules/shared/assets/icons"
import { SuccessModal } from "./components"
import { APP_IMAGES } from "@modules/shared/constant"
import { useContactUs } from "./hooks"

const ContactUs = () => {
  const { handleChange, handleSubmit, loading, modalOpen } = useContactUs()

  const labelClass = "text-xl font-fontBold mb-1 esm:text-lg"

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-third-bg bg-cover bg-no-repeat'>
      {modalOpen && <SuccessModal />}

      <div className='bg-white rounded shadow-lg flex gap-10 px-5 py-10 esm:w-[95%] exsm:py-6'>
        <div className='flex flex-col gap-6 pl-10 w-[550px] lg:pr-0 pr-10 esm:w-full esm:pl-4 esm:pr-4'>
          <div>
            <h1 className='uppercase font-fontTitle sm:text-7xl text-5xl exsm:text-4xl'>
              Contáctanos
            </h1>
            <p className='text-gray-500 text-lg mt-2 esm:text-base'>
              Tienes alguna sugerencia, pregunta o nos quieres hablar para algo? Llena un formulario
              con un mensaje y los responderemos
            </p>
          </div>

          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor='' className={labelClass}>
                Name:
              </label>
              <InputText className='text-base' name='name' type={"text"} onChange={handleChange} />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='' className={labelClass}>
                Email:
              </label>
              <InputText
                className='text-base'
                onChange={handleChange}
                name='email'
                type={"email"}
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='' className={labelClass}>
                Message:
              </label>
              <InputTextarea
                className='resize-none h-[150px] text-base py-2 esm:h-[100px]'
                onChange={handleChange}
                name='message'
              />
            </div>

            <div className='flex justify-end'>
              <LoaderContainer loading={loading} size={50}>
                <ChacaIconButton
                  color='primary'
                  icon={<Send size={23} />}
                  size='extra-large'
                  text='Send'
                />
              </LoaderContainer>
            </div>
          </form>
        </div>

        <div className='flex-col items-center justify-center w-[450px] lg:flex hidden'>
          <img
            src={APP_IMAGES.CONTACT.image}
            alt={APP_IMAGES.CONTACT.alt}
            className='object-contain w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
