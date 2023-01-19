import { userServices } from "@modules/user/services"
import { usePost } from "@shared/hooks"
import { API_ROUTES } from "@shared/routes"
import { useState } from "react"
import { toast } from "react-toastify"

export function useLogin() {
  const { handleSignIn } = userServices()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [loginUser, { loading }] = usePost<string>({
    url: API_ROUTES.AUTH_ROUTES.LOGIN,
    onError: (error) => {
      const errorMessage = error.response?.data as any
      toast.error(errorMessage.error || "Hubo un error")
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
