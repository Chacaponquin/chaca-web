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
      <h1 className="uppercase text-4xl dark:text-white font-fontTitle mb-1 esm:text-3xl text-center">
        {THANKS_TEXT}
      </h1>
      <p className="mb-5 text-xl text-scale-10 dark:text-scale-11 esm:text-lg text-center">
        {SECOND_TEXT}
      </p>
    </Fragment>
  )
}
