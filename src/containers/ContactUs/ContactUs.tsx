import { LoaderContainer } from "@modules/shared/components/Loader"
import { ChacaIconButton, ChacaTextInput, ChacaTextarea } from "@form/components"
import { Send } from "@modules/shared/assets/icons"
import { SuccessModal } from "./components"
import { APP_IMAGES } from "@modules/shared/constant"
import { useContactUs } from "./hooks"
import { useLanguage } from "@modules/shared/modules/app/hooks"

const ContactUs = () => {
  const { handleChange, handleSubmit, loading, modalOpen, contactForm } = useContactUs()

  const labelClass = "text-xl font-fontBold mb-1 esm:text-lg"

  const { EMAIL_LABEL, MESSAGE_LABEL, NAME_LABEL, CONTACT_US, LABEL_MESSAGE, SEND } = useLanguage({
    NAME_LABEL: { en: "Name", es: "Nombre" },
    EMAIL_LABEL: { en: "Email", es: "Email" },
    MESSAGE_LABEL: { en: "Message", es: "Mensaje" },
    CONTACT_US: { en: "Contact Us", es: "Contáctanos" },
    LABEL_MESSAGE: {
      en: "Do you have any suggestions, questions or want to talk to us about something? Fill out a form with a message and we will answer it",
      es: "Tienes alguna sugerencia, pregunta o nos quieres hablar para algo? Llena un formulario con un mensaje y lo responderemos",
    },
    SEND: { en: "Send", es: "Enviar" },
  })

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-third-bg bg-cover bg-no-repeat'>
      {modalOpen && <SuccessModal />}

      <div className='bg-white rounded shadow-lg flex gap-10 px-5 py-10 esm:w-[95%] exsm:py-6'>
        <div className='flex flex-col gap-6 pl-10 w-[550px] lg:pr-0 pr-10 esm:w-full esm:pl-4 esm:pr-4'>
          <div>
            <h1 className='uppercase font-fontTitle sm:text-7xl text-5xl exsm:text-4xl'>
              {CONTACT_US}
            </h1>
            <p className='text-grayStrongColor text-lg mt-2 esm:text-base'>{LABEL_MESSAGE}</p>
          </div>

          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label className={labelClass}>{NAME_LABEL}:</label>
              <ChacaTextInput
                onChange={(v) => handleChange("name", v)}
                value={contactForm.name}
                type='email'
                name='name'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='' className={labelClass}>
                {EMAIL_LABEL}:
              </label>
              <ChacaTextInput
                onChange={(v) => handleChange("email", v)}
                value={contactForm.email}
                type='email'
                name='email'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='' className={labelClass}>
                {MESSAGE_LABEL}:
              </label>
              <ChacaTextarea
                onChange={(v) => handleChange("message", v)}
                height={"normal"}
                value={contactForm.message}
                name='message'
              />
            </div>

            <div className='flex justify-end'>
              <LoaderContainer loading={loading} size={30} className='px-2 pt-2'>
                <ChacaIconButton
                  color='primary'
                  icon={<Send size={23} />}
                  size='extra-large'
                  text={SEND}
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
