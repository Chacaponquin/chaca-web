import { OtherOptionsSection } from "@containers/Auth/shared/components"
import { ChacaTextInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useId } from "react"
import { FormSection, HeaderText, SignButton } from "./components"
import { SignUpForm } from "../../interfaces"

interface Props {
  handleSubmit(e: React.FormEvent): void
  handleChange(k: keyof SignUpForm, v: string): void
  form: SignUpForm
  loading: boolean
}

export default function Form({ handleSubmit, handleChange, form, loading }: Props) {
  const { COMFIRM_PASSWORD_TEXT, EMAIL_TEXT, PASSWORD_TEXT, USERNAME_TEXT } = useTranslation({
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
            placeholder={USERNAME_TEXT}
            value={form.username}
            name="username"
            onChange={(v) => handleChange("username", v)}
            size="lg"
            type="text"
            id={usernameId}
            disabled={loading}
          />
        </FormSection>

        <FormSection id={emailId} label={EMAIL_TEXT}>
          <ChacaTextInput
            placeholder={EMAIL_TEXT}
            value={form.email}
            name="email"
            onChange={(v) => handleChange("email", v)}
            type="email"
            size="lg"
            id={emailId}
            disabled={loading}
          />
        </FormSection>

        <FormSection label={PASSWORD_TEXT} id={passwordId}>
          <ChacaTextInput
            placeholder={PASSWORD_TEXT}
            value={form.password}
            name="password"
            onChange={(v) => handleChange("password", v)}
            type="password"
            size="lg"
            id={passwordId}
            disabled={loading}
          />
        </FormSection>

        <FormSection label={COMFIRM_PASSWORD_TEXT} id={confirmId}>
          <ChacaTextInput
            placeholder={COMFIRM_PASSWORD_TEXT}
            value={form.confirmPassword}
            name="confirm_password"
            onChange={(v) => handleChange("confirmPassword", v)}
            type="password"
            size="lg"
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
