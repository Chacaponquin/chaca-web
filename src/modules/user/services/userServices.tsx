import { TOKEN_LOCATION } from "../constants/TOKEN"
import Cookies from "universal-cookie"
import { useCallback } from "react"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnvServices } from "@modules/app/modules/env/services"

export function userServices() {
  const { API_ROUTE } = useEnvServices()

  const handleSignIn = (token: string) => {
    localStorage.setItem(TOKEN_LOCATION, token)
    window.location.reload()
  }

  const handleSignOut = () => {
    localStorage.removeItem(TOKEN_LOCATION)
    window.location.reload()
  }

  const handleGoogleLogin = () => {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH_ROUTES.GOOGLE_AUTH}`, "_self")
  }

  const handleGithubLogin = () => {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH_ROUTES.GITHUB_AUTH}`, "_self")
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
  }
}
