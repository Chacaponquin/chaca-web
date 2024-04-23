import { useTranslation } from "@modules/app/modules/language/hooks"

export default function Header() {
  const { CONTACT_US, LABEL_MESSAGE } = useTranslation({
    CONTACT_US: { en: "Contact Us", es: "Contáctanos" },
    LABEL_MESSAGE: {
      en: "Do you have any suggestions, questions or want to talk to us about something? Fill out a form with a message and we will answer it",
      es: "Tienes alguna sugerencia, pregunta o nos quieres hablar para algo? Llena un formulario con un mensaje y lo responderemos",
    },
  })

  return (
    <header>
      <h1 className="font-fontTitle dark:text-white sm:text-6xl exsm:text-5xl text-4xl">
        {CONTACT_US}
      </h1>
      <p className="text-scale-7 dark:text-white text-lg mt-2 esm:text-base">{LABEL_MESSAGE}</p>
    </header>
  )
}
