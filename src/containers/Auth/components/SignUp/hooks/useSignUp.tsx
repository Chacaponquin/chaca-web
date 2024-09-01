import { useUser } from "@modules/user/hooks"
import { useState } from "react"
import {
  NotEqualUserPasswords,
  UsernameShortError,
  EmailEmptyError,
  PasswordEmptyError,
} from "@modules/user/errors"
import { SaveUser } from "@modules/user/domain/save-user"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { SignUpForm } from "../interfaces"
import { useUserServices } from "@modules/user/services"

export default function useSignUp() {
  const [signUpData, setSignUpData] = useState<SignUpForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)

  const { toastError } = useToast()
  const { handleSignIn } = useUser()
  const { signUpUser } = useUserServices()

  const {
    ALREADY_EXIST_USER_TEXT,
    CREATING_USER_TEXT,
    LENGTH_USERNAME,
    NOT_EQUAL_PASSWORDS,
    EMPTY_EMAIL,
    EMPTY_PASSWORD,
  } = useTranslation({
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      const saveUser = new SaveUser({ ...signUpData })

      setLoading(true)
      signUpUser({
        body: { email: saveUser.email, password: saveUser.password, username: saveUser.password },
        onSuccess(userToken) {
          handleSignIn(userToken)
        },
        onError(error) {
          if (error.status === 409) {
            toastError({ message: ALREADY_EXIST_USER_TEXT, id: "repeat-user" })
          } else {
            toastError({ message: CREATING_USER_TEXT, id: "sign-up-user" })
          }
        },
        onFinally() {
          setLoading(true)
        },
      })
    } catch (error) {
      if (error instanceof UsernameShortError) {
        toastError({ message: LENGTH_USERNAME, id: "short-username" })
      } else if (error instanceof NotEqualUserPasswords) {
        toastError({ message: NOT_EQUAL_PASSWORDS, id: "different-passwords" })
      } else if (error instanceof EmailEmptyError) {
        toastError({ message: EMPTY_EMAIL, id: "empty-email" })
      } else if (error instanceof PasswordEmptyError) {
        toastError({ message: EMPTY_PASSWORD, id: "empty-password" })
      }
    }
  }

  function handleChange(key: keyof SignUpForm, value: string) {
    setSignUpData({ ...signUpData, [key]: value })
  }

  return { handleChange, handleSubmit, loading, signUpData }
}
