import { ChacaTextInput, ChacaTextarea } from "@form/components"
import { useId } from "react"
import { ButtonSection, FormSection } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { MessageForm } from "../../interfaces"

interface Props {
  handleSubmit: (e: React.FormEvent) => void
  form: MessageForm
  handleChange: (k: keyof MessageForm, v: string) => void
  loading: boolean
}

export default function Form({ handleSubmit, form, handleChange, loading }: Props) {
  const { EMAIL_LABEL, MESSAGE_LABEL, TITLE_LABEL, SEND } = useLanguage({
    TITLE_LABEL: { en: "Title", es: "Título" },
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
          name="title"
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
