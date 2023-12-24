import { Layout } from "@containers/Layout/components"
import { Form, Header, ImageSection, SuccessModal } from "./components"
import { useContactUs } from "./hooks"
import { useTranslation } from "@modules/app/modules/language/hooks"
import clsx from "clsx"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"

export default function ContactUs() {
  const { handleChange, handleSubmit, loading, modalOpen, contactForm } = useContactUs()
  const { theme } = useTheme()

  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: {
      en: "Send us a message to our Chaca team to know your opinion about the tool",
      es: "Envíanos un mensaje a nuestro equipo de Chaca para poder saber tu opnión sobre la herramienta",
    },
  })

  const containerClass = clsx(
    "flex justify-center items-center w-screen h-screen dark:bg-scale-2",
    { "bg-third-bg bg-cover bg-no-repeat": theme === THEME.LIGHT },
  )

  return (
    <Layout title="Chaca | Contact Us" description={DESCRIPTION}>
      <main className={containerClass}>
        {modalOpen && <SuccessModal />}

        <div className="bg-white dark:bg-scale-6 rounded shadow-lg flex gap-10 px-5 py-10 esm:w-[95%] exsm:py-6">
          <section className="flex flex-col gap-6 pl-10 w-[550px] lg:pr-0 pr-10 esm:w-full esm:pl-4 esm:pr-4">
            <Header />

            <Form
              handleChange={handleChange}
              form={contactForm}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </section>

          <ImageSection />
        </div>
      </main>
    </Layout>
  )
}
