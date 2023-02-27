import { userServices } from "@modules/user/services"
import { useLanguage, usePost } from "@modules/shared/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { useState, useContext } from "react"
import { toast } from "react-toastify"
import { SignUpUserDTO } from "@containers/Auth/shared/dto/signUpUserDTO.dto"
import { NotEqualUserPasswords, UsernameShortError } from "@modules/user/error"
import { RequiredFormFieldError } from "@modules/shared/errors"
import { AppConfigContext } from "@modules/shared/context"

export function useSignUp() {
  const { language } = useContext(AppConfigContext)

  const { ALREADY_EXIST_USER_TEXT, CREATING_USER_TEXT, LENGTH_USERNAME, NOT_EQUAL_PASSWORDS } =
    useLanguage({
      ALREADY_EXIST_USER_TEXT: { en: "This user already exists", es: "Ya existe este usuario" },
      CREATING_USER_TEXT: {
        en: "There was an error creating the user",
        es: "Hubo un error en la creación del usaurio",
      },
      LENGTH_USERNAME: {
        en: "The username must have at least 7 characters",
        es: "El nombre de usuario debe tener al menos 7 caracteres",
      },
      NOT_EQUAL_PASSWORDS: {
        en: "Your passwords do not match",
        es: "Tus contraseñas no coinciden",
      },
    })

  const [signUpData, setSignUpData] = useState<SignUpUserDTO>({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  })

  const { handleSignIn, validateSignUpDTO } = userServices()

  const [signUpUser, { loading }] = usePost<string, SignUpUserDTO>({
    url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
    onCompleted: (userToken) => {
      handleSignIn(userToken)
    },
    onError: (error) => {
      if (error.status === 401) {
        toast.error(ALREADY_EXIST_USER_TEXT)
      } else {
        toast.error(CREATING_USER_TEXT)
      }
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      validateSignUpDTO(signUpData)
      signUpUser({ body: signUpData })
    } catch (error) {
      if (error instanceof UsernameShortError) {
        toast.error(LENGTH_USERNAME)
      } else if (error instanceof NotEqualUserPasswords) {
        toast.error(NOT_EQUAL_PASSWORDS)
      } else if (error instanceof RequiredFormFieldError) {
        toast.error(error.fieldTraduction[language])
      }
    }
  }

  const handleChange = (key: keyof SignUpUserDTO, value: string) => {
    setSignUpData({ ...signUpData, [key]: value })
  }

  return { handleChange, handleSubmit, loading, signUpData }
}
