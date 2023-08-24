import { useUserServices } from "@modules/user/services"
import { usePost } from "@modules/app/modules/http/hooks"
import { useState } from "react"
import { LoginUserDTO } from "@modules/user/dto/user"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useToastServices } from "@modules/app/modules/toast/services"
import { useLanguage } from "@modules/app/modules/language/hooks"

export function useLogin() {
  const { handleSignIn } = useUserServices()
  const { toastError } = useToastServices()

  const { LOGIN_ERROR } = useLanguage({ LOGIN_ERROR: { en: "Network error", es: "Hubo un error" } })

  const [loginData, setLoginData] = useState<LoginUserDTO>({
    email: "",
    password: "",
  })

  const [loginUser, { loading }] = usePost<string, LoginUserDTO>({
    url: API_ROUTES.AUTH_ROUTES.LOGIN,
    onError: () => {
      toastError(LOGIN_ERROR)
    },
    onCompleted: (token) => handleSignIn(token),
  })

  const handleChange = (key: keyof LoginUserDTO, value: string) =>
    setLoginData({ ...loginData, [key]: value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginUser({ body: loginData })
  }

  return { loading, handleChange, handleSubmit }
}
