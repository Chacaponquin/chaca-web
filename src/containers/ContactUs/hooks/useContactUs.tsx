import { useState } from "react"
import { MessageForm } from "../interfaces"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { SaveUserMessage } from "@modules/user-message/domain"
import { useToast } from "@modules/app/modules/toast/hooks"
import {
  EmptyMessageTitleError,
  EmptyUserEmailError,
  EmptyUserMessageError,
} from "@modules/user-message/errors"
import { useUserMessageServices } from "@modules/user-message/services"

export default function useContactUs() {
  const [loading, setLoading] = useState(false)
  const [contactForm, setContactForm] = useState<MessageForm>({
    title: "",
    email: "",
    message: "",
  })
  const [modalOpen, setModalOpen] = useState(false)

  const { toastError } = useToast()
  const { sendMessage } = useUserMessageServices()

  const { POST_ERROR, EMPTY_MESSAGE, EMPTY_TITLE, EMPTY_EMAIL } = useTranslation({
    POST_ERROR: {
      en: "There was an error sending the message",
      es: "Hubo un error al enviar el mensaje",
    },
    EMPTY_EMAIL: { en: "You must insert your email", es: "Debes insertar tu email" },
    EMPTY_MESSAGE: { en: "Can't leave message empty", es: "No se puede dejar el mensaje vacío" },
    EMPTY_TITLE: { en: "The message must have a title", es: "El mensaje debe tener un título" },
  })

  function handleChange(key: keyof MessageForm, value: string) {
    setContactForm({ ...contactForm, [key]: value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      const saveMessage = new SaveUserMessage(contactForm)

      setLoading(true)
      sendMessage({
        body: { email: saveMessage.email, message: saveMessage.message, title: saveMessage.title },
        onSuccess: () => {
          setModalOpen(true)
        },
        onError: () => {
          toastError({ message: POST_ERROR })
        },
        onFinally: () => {
          setLoading(false)
        },
      })
    } catch (error) {
      if (error instanceof EmptyMessageTitleError) {
        toastError({ message: EMPTY_TITLE })
      } else if (error instanceof EmptyUserMessageError) {
        toastError({ message: EMPTY_MESSAGE })
      } else if (error instanceof EmptyUserEmailError) {
        toastError({ message: EMPTY_EMAIL })
      }
    }
  }

  return { modalOpen, handleChange, handleSubmit, loading, contactForm }
}
