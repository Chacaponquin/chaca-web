import { useUserServices } from "@modules/user/services"
import { usePost } from "@modules/app/modules/http/hooks"
import { useState } from "react"
import { LoginUserDTO } from "@modules/user/dto/user"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useToastServices } from "@modules/app/modules/toast/services"

export function useLogin() {
  const { handleSignIn } = useUserServices()
  const { toastError } = useToastServices()

  const [loginData, setLoginData] = useState<LoginUserDTO>({
    email: "",
    password: "",
  })

  const [loginUser, { loading }] = usePost<string, LoginUserDTO>({
    url: API_ROUTES.AUTH_ROUTES.LOGIN,
    onError: () => {
      toastError("Hubo un error")
    },
    onCompleted: (token) => handleSignIn(token),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginUser({ body: loginData })
  }

  return { loading, handleChange, handleSubmit }
}
