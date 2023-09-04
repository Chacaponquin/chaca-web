import { useState } from "react"
import { CreateMessageDTO } from "@modules/user-message/dto/user_message"
import { MessageForm } from "../interfaces/form.interface"
import { usePost } from "@modules/app/modules/http/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { SaveUserMessage } from "@modules/user-message/domain"
import { useToastServices } from "@modules/app/modules/toast/services"
import {
  EmptyMessageTitleError,
  EmptyUserEmailError,
  EmptyUserMessageError,
} from "@modules/user-message/errors"

export function useContactUs() {
  const [contactForm, setContactForm] = useState<MessageForm>({
    title: "",
    email: "",
    message: "",
  })
  const [modalOpen, setModalOpen] = useState(false)

  const { POST_ERROR, EMPTY_MESSAGE, EMPTY_TITLE, EMPTY_EMAIL } = useLanguage({
    POST_ERROR: {
      en: "There was an error sending the message",
      es: "Hubo un error al enviar el mensaje",
    },
    EMPTY_EMAIL: { en: "You must insert your email", es: "Debes insertar tu email" },
    EMPTY_MESSAGE: { en: "Can't leave message empty", es: "No se puede dejar el mensaje vacío" },
    EMPTY_TITLE: { en: "The message must have a title", es: "El mensaje debe tener un título" },
  })

  const { toastError } = useToastServices()

  const [createMessage, { loading }] = usePost<void, CreateMessageDTO>({
    url: API_ROUTES.CREATE_USER_MESSAGE,
    onCompleted: () => {
      setModalOpen(true)
    },
    onError: () => {
      toastError(POST_ERROR)
    },
  })

  const handleChange = (key: keyof MessageForm, value: string) => {
    setContactForm({ ...contactForm, [key]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const saveMessage = new SaveUserMessage(contactForm)
      createMessage({
        body: { email: saveMessage.email, message: saveMessage.message, title: saveMessage.title },
      })
    } catch (error) {
      if (error instanceof EmptyMessageTitleError) {
        toastError(EMPTY_TITLE)
      } else if (error instanceof EmptyUserMessageError) {
        toastError(EMPTY_MESSAGE)
      } else if (error instanceof EmptyUserEmailError) {
        toastError(EMPTY_EMAIL)
      }
    }
  }

  return { modalOpen, handleChange, handleSubmit, loading, contactForm }
}
