import { userServices } from "@modules/user/services"
import { usePost } from "@modules/shared/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { useState } from "react"
import { toast } from "react-toastify"
import { SignUpUserDTO } from "@containers/Auth/shared/dto/signUpUserDTO.dto"

export function useSignUp() {
  const [signUpData, setSignUpData] = useState<SignUpUserDTO>({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  })

  const { handleSignIn } = userServices()

  const [signUpUser, { loading }] = usePost<string, SignUpUserDTO>({
    url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
    onCompleted: (userToken) => {
      handleSignIn(userToken)
    },
    onError: () => {
      toast.error("Hubo un error en la creacion del usuario")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (signUpData.password === signUpData.comfirmPassword) {
      signUpUser({ body: signUpData })
    } else throw toast.error("No coinciden las contraseñas", {})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }

  return { handleChange, handleSubmit, loading }
}
