import { userServices } from "@modules/user/services"
import { useState } from "react"
import { toast } from "react-toastify"
import { SignUpUserDTO } from "@modules/user/dto/user"
import {
  NotEqualUserPasswords,
  UsernameShortError,
  EmailEmptyError,
  PasswordEmptyError,
} from "@modules/user/errors"
import { usePost } from "@modules/app/modules/http/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { SaveUser } from "@modules/user/domain"
import { useLanguage } from "@modules/app/modules/language/hooks"

export function useSignUp() {
  const {
    ALREADY_EXIST_USER_TEXT,
    CREATING_USER_TEXT,
    LENGTH_USERNAME,
    NOT_EQUAL_PASSWORDS,
    EMPTY_EMAIL,
    EMPTY_PASSWORD,
  } = useLanguage({
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
    EMPTY_EMAIL: { en: "The email can not be empty", es: "El email no puede estar vacío" },
    EMPTY_PASSWORD: {
      en: "The password can not be empty",
      es: "La contraseña no puede estar vacía",
    },
  })

  const [signUpData, setSignUpData] = useState<SignUpUserDTO>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { handleSignIn } = userServices()

  const [signUpUser, { loading }] = usePost<string, SaveUser>({
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
      const saveUser = new SaveUser({ ...signUpData })
      signUpUser({ body: saveUser })
    } catch (error) {
      if (error instanceof UsernameShortError) {
        toast.error(LENGTH_USERNAME)
      } else if (error instanceof NotEqualUserPasswords) {
        toast.error(NOT_EQUAL_PASSWORDS)
      } else if (error instanceof EmailEmptyError) {
        toast.error(EMPTY_EMAIL)
      } else if (error instanceof PasswordEmptyError) {
        toast.error(EMPTY_PASSWORD)
      }
    }
  }

  const handleChange = (key: keyof SignUpUserDTO, value: string) => {
    setSignUpData({ ...signUpData, [key]: value })
  }

  return { handleChange, handleSubmit, loading, signUpData }
}
