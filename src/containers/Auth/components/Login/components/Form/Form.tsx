import { useLanguage } from "@modules/app/modules/language/hooks"
import { Input, LoginButton, OtherOptions } from "./components"
import { LoginForm } from "../../interfaces"

interface Props {
  loading: boolean
  handleChange: (k: keyof LoginForm, v: string) => void
  handleSubmit: (e: React.FormEvent) => void
}

export default function Form({ loading, handleChange, handleSubmit }: Props) {
  const { LOGIN_BUTTON_TEXT, EMAIL_TEXT, PASSWORD_TEXT } = useLanguage({
    LOGIN_BUTTON_TEXT: { en: "Login", es: "Login" },
    FORGET_PASSWORD_BUTTON_TEXT: { en: "Forget Password?", es: "Olvidaste tu contraseña?" },
    EMAIL_TEXT: { en: "Email", es: "Email" },
    PASSWORD_TEXT: { en: "Password", es: "Contraseña" },
  })

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full pt-8 gap-5 esm:py-6">
        <Input type={"email"} onChange={handleChange} placeholder={EMAIL_TEXT} />
        <Input onChange={handleChange} type={"password"} placeholder={PASSWORD_TEXT} />
      </div>

      <div className="flex w-full gap-5 flex-wrap justify-center items-center mt-5">
        <LoginButton loading={loading} text={LOGIN_BUTTON_TEXT} />
      </div>

      <OtherOptions loading={loading} />
    </form>
  )
}
