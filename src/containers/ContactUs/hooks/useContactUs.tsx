import { useState } from "react"
import { CreateMessageDTO } from "../dto/createMessage.dto"
import { usePost } from "@modules/shared/modules/http/hooks"
import { toast } from "react-toastify"
import { API_ROUTES } from "@modules/shared/routes"

export function useContactUs() {
  const [contactForm, setContactForm] = useState<CreateMessageDTO>({
    name: "",
    email: "",
    message: "",
  })
  const [modalOpen, setModalOpen] = useState(false)

  const [createMessage, { loading }] = usePost<void, CreateMessageDTO>({
    url: API_ROUTES.CREATE_USER_MESSAGE,
    onCompleted: () => {
      setModalOpen(true)
    },
    onError: () => {
      toast.error("Hubo un error al enviar el mensaje")
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createMessage({ body: contactForm })
  }

  return { modalOpen, handleChange, handleSubmit, loading }
}
