import { Layout } from "@containers/Layout/components"
import { Form, Header, ImageSection, SuccessModal } from "./components"
import { useContactUs } from "./hooks"
import { useLanguage } from "@modules/app/modules/language/hooks"

const ContactUs = () => {
  const { handleChange, handleSubmit, loading, modalOpen, contactForm } = useContactUs()

  const { DESCRIPTION } = useLanguage({
    DESCRIPTION: {
      en: "Send us a message to our Chaca team to know your opinion about the tool",
      es: "Envíanos un mensaje a nuestro equipo de Chaca para poder saber tu opnión sobre la herramienta",
    },
  })

  return (
    <Layout title="Chaca | Contact Us" description={DESCRIPTION}>
      <main className="flex justify-center items-center w-screen h-screen bg-third-bg bg-cover bg-no-repeat">
        {modalOpen && <SuccessModal />}

        <div className="bg-white rounded shadow-lg flex gap-10 px-5 py-10 esm:w-[95%] exsm:py-6">
          <div className="flex flex-col gap-6 pl-10 w-[550px] lg:pr-0 pr-10 esm:w-full esm:pl-4 esm:pr-4">
            <Header />

            <Form
              handleChange={handleChange}
              form={contactForm}
              handleSubmit={handleSubmit}
              loading={loading}
            />

            <ImageSection />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContactUs
