import { SignUpUserDTO } from "@containers/Auth/shared/dto/signUpUserDTO.dto"
import { API_ROUTES } from "@modules/shared/routes"
import { appService } from "@modules/shared/modules/appConfig/services/appServices.service"
import { NotEqualUserPasswords, UsernameShortError } from "../error"
import { TOKEN_LOCATION } from "../constants/TOKEN"
import Cookies from "universal-cookie"
import { useCallback } from "react"

export function userServices() {
  const { validateRequiredForm } = appService()

  const handleSignIn = (token: string) => {
    localStorage.setItem(TOKEN_LOCATION, token)
    window.location.reload()
  }

  const handleSignOut = () => {
    localStorage.removeItem(TOKEN_LOCATION)
    window.location.reload()
  }

  const handleGoogleLogin = () => {
    window.open(`${process.env.REACT_APP_API_URL}${API_ROUTES.AUTH_ROUTES.GOOGLE_AUTH}`, "_self")
  }

  const handleGithubLogin = () => {
    window.open(`${process.env.REACT_APP_API_URL}${API_ROUTES.AUTH_ROUTES.GITHUB_AUTH}`, "_self")
  }

  const validateSignUpDTO = (userForm: SignUpUserDTO) => {
    if (userForm.username.length < 7) {
      throw new UsernameShortError()
    }
    if (userForm.comfirmPassword !== userForm.password) {
      throw new NotEqualUserPasswords()
    }

    validateRequiredForm<SignUpUserDTO>(userForm, {
      username: {
        en: "The username can not be empty",
        es: "El nombre de usuario no puede estar vacío",
      },
      email: { en: "The email can not be empty", es: "El email no puede estar vacío" },
      password: { en: "The password can not be empty", es: "La contraseña no puede estar vacía" },
      comfirmPassword: {
        en: "The confirm password can not be empty",
        es: "La contraseña de confirmación no puede estar vacía",
      },
    })
  }

  const getTokenCookie = useCallback((): string => {
    const cookies = new Cookies()
    const tokenCookie = cookies.get(TOKEN_LOCATION)

    if (tokenCookie) {
      localStorage.setItem(TOKEN_LOCATION, tokenCookie)
    }

    const returnToken = localStorage.getItem(TOKEN_LOCATION) || ""

    return returnToken
  }, [])

  return {
    getTokenCookie,
    handleSignIn,
    handleSignOut,
    handleGoogleLogin,
    handleGithubLogin,
    validateSignUpDTO,
  }
}
