import { useUser } from "@modules/user/hooks"
import { useState } from "react"
import { LoginUserDTO } from "@modules/user/dto/user"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { LoginForm } from "../interfaces"
import { useUserServices } from "@modules/user/services"

export default function useLogin() {
  const { handleSignIn } = useUser()
  const { toastError } = useToast()

  const [loading, setLoading] = useState(false)

  const { loginUser } = useUserServices()

  const { LOGIN_ERROR } = useLanguage({ LOGIN_ERROR: { en: "Network error", es: "Hubo un error" } })

  const [loginData, setLoginData] = useState<LoginForm>({
    email: "",
    password: "",
  })

  function handleChange(key: keyof LoginUserDTO, value: string) {
    setLoginData({ ...loginData, [key]: value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    loginUser({
      body: loginData,
      onError: () => {
        toastError({ message: LOGIN_ERROR })
      },
      onSuccess: (token) => {
        handleSignIn(token)
      },
      onFinally: () => {
        setLoading(false)
      },
    })
  }

  return { loading, handleChange, handleSubmit }
}
