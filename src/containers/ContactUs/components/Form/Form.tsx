import { ChacaTextInput, ChacaTextarea } from "@form/components"
import { useId } from "react"
import { ButtonSection, FormSection } from "./components"
import { CreateMessageDTO } from "@modules/user-message/dto/user_message"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function Form({
  handleSubmit,
  form,
  handleChange,
  loading,
}: {
  handleSubmit: (e: React.FormEvent) => void
  form: CreateMessageDTO
  handleChange: (k: keyof CreateMessageDTO, v: string) => void
  loading: boolean
}) {
  const { EMAIL_LABEL, MESSAGE_LABEL, TITLE_LABEL, SEND } = useLanguage({
    TITLE_LABEL: { en: "Name", es: "Nombre" },
    EMAIL_LABEL: { en: "Email", es: "Email" },
    MESSAGE_LABEL: { en: "Message", es: "Mensaje" },
    SEND: { en: "Send", es: "Enviar" },
  })

  const emailId = useId()
  const titleId = useId()
  const messageId = useId()

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <FormSection id={titleId} labelText={TITLE_LABEL}>
        <ChacaTextInput
          onChange={(v) => handleChange("title", v)}
          value={form.title}
          type="text"
          name="name"
          id={titleId}
        />
      </FormSection>

      <FormSection id={emailId} labelText={EMAIL_LABEL}>
        <ChacaTextInput
          onChange={(v) => handleChange("email", v)}
          value={form.email}
          type="email"
          name="email"
          id={emailId}
        />
      </FormSection>

      <FormSection labelText={MESSAGE_LABEL} id={messageId}>
        <ChacaTextarea
          onChange={(v) => handleChange("message", v)}
          height={"normal"}
          value={form.message}
          name="message"
          id={messageId}
        />
      </FormSection>

      <ButtonSection buttonText={SEND} loading={loading} />
    </form>
  )
}
