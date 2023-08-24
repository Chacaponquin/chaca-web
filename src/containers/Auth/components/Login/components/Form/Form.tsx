import { useLanguage } from "@modules/app/modules/language/hooks"
import { ForgotButton, Input, LoginButton } from "./components"
import { OtherOptionsSection } from "@containers/Auth/shared/components"
import { LoginUserDTO } from "@modules/user/dto/user"

export default function Form({
  loading,
  handleChange,
  handleSubmit,
}: {
  loading: boolean
  handleChange: (k: keyof LoginUserDTO, v: string) => void
  handleSubmit: (e: React.FormEvent) => void
}) {
  const { LOGIN_BUTTON_TEXT, FORGET_PASSWORD_BUTTON_TEXT, EMAIL_TEXT, PASSWORD_TEXT } = useLanguage(
    {
      LOGIN_BUTTON_TEXT: { en: "Login", es: "Login" },
      FORGET_PASSWORD_BUTTON_TEXT: { en: "Forget Password?", es: "Olvidaste tu contraseña?" },
      EMAIL_TEXT: { en: "Email", es: "Email" },
      PASSWORD_TEXT: { en: "Password", es: "Contraseña" },
    },
  )

  const BUTTON_CLASS =
    "rounded-full flex justify-center items-center py-4 esm:py-3 w-[400px] esm:w-[340px] esm:text-lg text-xl font-fontBold uppercase transition-all duration-300 whitespace-nowrap hover:opacity-70"

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full py-8 gap-5 esm:py-6">
        <Input type={"email"} onChange={handleChange} placeholder={EMAIL_TEXT} />
        <Input onChange={handleChange} type={"password"} placeholder={PASSWORD_TEXT} />
      </div>

      <div className="mb-4">
        <OtherOptionsSection loading={loading} />
      </div>

      <div className="flex w-full gap-5 flex-wrap justify-center items-center">
        <LoginButton className={BUTTON_CLASS} loading={loading} text={LOGIN_BUTTON_TEXT} />
        {!loading && <ForgotButton text={FORGET_PASSWORD_BUTTON_TEXT} className={BUTTON_CLASS} />}
      </div>
    </form>
  )
}
