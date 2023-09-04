import { useLanguage } from "@modules/app/modules/language/hooks"
import { Fragment } from "react"

export default function Text() {
  const { SECOND_TEXT, THANKS_TEXT } = useLanguage({
    THANKS_TEXT: { en: "Thanks for your message!!!", es: "Gracias por su mensaje!!!" },
    SECOND_TEXT: {
      en: "We will answer you soon as possible",
      es: "Te responderemos lo más rápido posible",
    },
  })

  return (
    <Fragment>
      <h1 className="uppercase text-4xl font-fontTitle mb-1 esm:text-3xl">{THANKS_TEXT}</h1>
      <p className="mb-5 text-xl text-gray-500 esm:text-lg">{SECOND_TEXT}</p>
    </Fragment>
  )
}
