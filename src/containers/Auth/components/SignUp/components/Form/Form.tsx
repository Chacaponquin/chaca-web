import { OtherOptionsSection } from "@containers/Auth/shared/components"
import { ChacaTextInput } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useId } from "react"
import { FormSection, HeaderText, SignButton } from "./components"
import { SignUpForm } from "../../interfaces/form.interface"

export default function Form({
  handleSubmit,
  handleChange,
  form,
  loading,
}: {
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (K: keyof SignUpForm, v: string) => void
  form: SignUpForm
  loading: boolean
}) {
  const { COMFIRM_PASSWORD_TEXT, EMAIL_TEXT, PASSWORD_TEXT, USERNAME_TEXT } = useLanguage({
    USERNAME_TEXT: { en: "Username", es: "Usuario" },
    EMAIL_TEXT: { en: "Email", es: "Email" },
    PASSWORD_TEXT: { en: "Password", es: "Contraseña" },
    COMFIRM_PASSWORD_TEXT: { en: "Comfirm Password", es: "Confirma tu contraseña" },
  })

  const usernameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const confirmId = useId()

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <HeaderText />

      <div className="py-5 flex flex-col gap-3">
        <FormSection label={USERNAME_TEXT} id={usernameId}>
          <ChacaTextInput
            placeholder="Username"
            value={form.username}
            name="username"
            onChange={(v) => handleChange("username", v)}
            dimension="large"
            id={usernameId}
            disabled={loading}
          />
        </FormSection>

        <FormSection id={emailId} label={EMAIL_TEXT}>
          <ChacaTextInput
            placeholder="Email"
            value={form.email}
            name="email"
            onChange={(v) => handleChange("email", v)}
            dimension="large"
            id={emailId}
            disabled={loading}
          />
        </FormSection>

        <FormSection label={PASSWORD_TEXT} id={passwordId}>
          <ChacaTextInput
            placeholder="Password"
            value={form.password}
            name="password"
            onChange={(v) => handleChange("password", v)}
            type="password"
            dimension="large"
            id={passwordId}
            disabled={loading}
          />
        </FormSection>

        <FormSection label={COMFIRM_PASSWORD_TEXT} id={confirmId}>
          <ChacaTextInput
            placeholder="Confirm Password"
            value={form.confirmPassword}
            name="confirm_password"
            onChange={(v) => handleChange("confirmPassword", v)}
            type="password"
            dimension="large"
            id={confirmId}
            disabled={loading}
          />
        </FormSection>
      </div>

      <OtherOptionsSection loading={loading} />

      <SignButton loading={loading} />
    </form>
  )
}
