import { APP_ROUTES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Link } from "react-router-dom"

export default function Redirect() {
  const { LOGIN_TEXT, QUESTION_TEXT } = useTranslation({
    QUESTION_TEXT: { en: "You have account?", es: "Tienes una cuenta?" },
    LOGIN_TEXT: { en: "Login", es: "Login" },
  })

  return (
    <section className="flex justify-start w-full text-lg mb-6">
      <p className="inline mb-0 whitespace-nowrap dark:text-white">{QUESTION_TEXT} </p>
      <Link to={APP_ROUTES.AUTH.LOGIN}>
        <button
          className="inline mb-0 ml-2 text-purple-7 dark:text-purple-5"
          id="redirect-login-button"
        >
          {LOGIN_TEXT}
        </button>
      </Link>
    </section>
  )
}
