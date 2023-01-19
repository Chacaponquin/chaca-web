import { userServices } from "@modules/user/services"
import { usePost } from "@shared/hooks"
import { API_ROUTES } from "@shared/routes"
import { useState } from "react"
import { toast } from "react-toastify"

export function useSignUp() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  })

  const { handleSignIn } = userServices()

  const [signUpUser, { loading }] = usePost<string>({
    url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
    onCompleted: (userToken) => {
      handleSignIn(userToken)
    },
    onError: (error) => {
      const errorObject = error?.response?.data as any
      if (errorObject) toast.error(errorObject.error)
      else toast.error("Hubo un error en la creacion del usuario")
    },
    body: signUpData,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (signUpData.password === signUpData.comfirmPassword) {
      signUpUser()
    } else throw toast.error("No coinciden las contraseñas", {})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }

  return { handleChange, handleSubmit, loading }
}
