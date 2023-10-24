import { useUser } from "@modules/user/hooks"
import { useState } from "react"
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
import { useToast } from "@modules/app/modules/toast/hooks"
import { SignUpForm } from "../interfaces/form.interface"
import { SignUpUserDTO } from "@modules/user/dto/user"

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

  const [signUpData, setSignUpData] = useState<SignUpForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { handleSignIn } = useUser()

  const [signUpUser, { loading }] = usePost<string, SignUpUserDTO>({
    url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
    onCompleted: (userToken) => {
      handleSignIn(userToken)
    },
    onError: (error) => {
      if (error.status === 409) {
        toastError(ALREADY_EXIST_USER_TEXT)
      } else {
        toastError(CREATING_USER_TEXT)
      }
    },
  })

  const { toastError } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const saveUser = new SaveUser({ ...signUpData })
      signUpUser({
        body: { email: saveUser.email, password: saveUser.password, username: saveUser.password },
      })
    } catch (error) {
      if (error instanceof UsernameShortError) {
        toastError(LENGTH_USERNAME)
      } else if (error instanceof NotEqualUserPasswords) {
        toastError(NOT_EQUAL_PASSWORDS)
      } else if (error instanceof EmailEmptyError) {
        toastError(EMPTY_EMAIL)
      } else if (error instanceof PasswordEmptyError) {
        toastError(EMPTY_PASSWORD)
      }
    }
  }

  const handleChange = (key: keyof SignUpForm, value: string) => {
    setSignUpData({ ...signUpData, [key]: value })
  }

  return { handleChange, handleSubmit, loading, signUpData }
}
