import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import React, { useState } from "react"
import { usePost } from "../../shared/hooks/usePost"
import { API_ROUTES } from "../../shared/routes/api/API_ROUTES"
import LoaderContainer from "../../shared/components/Loader/LoaderContainer"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "../../shared/routes/app/APP_ROUTES"
import { toast, ToastContainer } from "react-toastify"
import { ChacaIconButton } from "../../shared/components/ChacaButton"
import { Send } from "../../shared/assets/icons"

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [modalOpen, setModalOpen] = useState(false)

  const labelClass = "text-xl font-fontBold mb-1 esm:text-lg"

  const [createMessage, { loading }] = usePost<void>({
    url: API_ROUTES.CREATE_USER_MESSAGE,
    onCompleted: () => {
      setModalOpen(true)
    },
    onError: () => {
      toast.error("Hubo un error al enviar el mensaje")
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(contactForm)
    createMessage({ body: contactForm })
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-third-bg bg-cover bg-no-repeat'>
      <ToastContainer autoClose={5000} hideProgressBar={true} />
      {modalOpen && <SuccessModal />}
      <div className='bg-white rounded shadow-lg flex gap-10 px-5 py-10 esm:w-[95%] exsm:py-6'>
        <div className='flex flex-col gap-6 pl-10 w-[550px] lg:pr-0 pr-10 esm:w-full esm:pl-4 esm:pr-4'>
          <div>
            <h1 className='uppercase font-fontExtraBold sm:text-7xl text-5xl exsm:text-4xl'>
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
              <LoaderContainer loading={loading} className='w-[50px] mt-2'>
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
          <img src={"/images/contact.png"} alt='contact-us' className='object-contain w-full' />
        </div>
      </div>
    </div>
  )
}

const SuccessModal = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white/40 '>
      <div className='py-6 px-20 bg-white shadow-lg rounded-md flex flex-col items-center esm:px-10 max-w-[95%]'>
        <img src={"/images/modeal.png"} alt='' className='object-contain w-[250px]' />
        <h1 className='uppercase text-4xl font-fontExtraBold mb-1 esm:text-3xl'>
          Gracias por tu mensaje!!!
        </h1>
        <p className='mb-5 text-xl text-gray-500 esm:text-lg'>
          Te responderemos lo más rápido posible
        </p>

        <Link
          to={APP_ROUTES.ROOT}
          className='bg-secondColor text-white font-fontBold px-10 text-2xl hover:bg-secondColor/70 transition-all duration-300 rounded-md py-2 esm:text-xl'
        >
          Volver
        </Link>
      </div>
    </div>
  )
}

export default ContactUs
