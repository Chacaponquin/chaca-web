import { useState } from "react"
import { CreateMessageDTO } from "../dto/createMessage.dto"
import { usePost } from "@modules/shared/modules/http/hooks"
import { toast } from "react-toastify"
import { API_ROUTES } from "@modules/shared/routes"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"

export function useContactUs() {
  const [contactForm, setContactForm] = useState<CreateMessageDTO>({
    name: "",
    email: "",
    message: "",
  })
  const [modalOpen, setModalOpen] = useState(false)

  const { POST_ERROR } = useLanguage({
    POST_ERROR: {
      en: "There was an error sending the message",
      es: "Hubo un error al enviar el mensaje",
    },
  })

  const [createMessage, { loading }] = usePost<void, CreateMessageDTO>({
    url: API_ROUTES.CREATE_USER_MESSAGE,
    onCompleted: () => {
      setModalOpen(true)
    },
    onError: () => {
      toast.error(POST_ERROR)
    },
  })

  const handleChange = (key: keyof CreateMessageDTO, value: string) => {
    setContactForm({ ...contactForm, [key]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createMessage({ body: contactForm })
  }

  return { modalOpen, handleChange, handleSubmit, loading, contactForm }
}
