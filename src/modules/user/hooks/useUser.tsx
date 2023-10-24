import { TOKEN_LOCATION } from "../constants"
import Cookies from "universal-cookie"
import { useCallback, useContext, useMemo } from "react"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnv } from "@modules/app/modules/env/hooks"
import { UserContext } from "../context"

export default function useUser() {
  const { API_ROUTE } = useEnv()
  const { actualUser, noUserLimits, loading } = useContext(UserContext)

  const USER_DATASETS_LIMIT = useMemo(() => {
    return actualUser ? actualUser.limitDatasets : noUserLimits.LIMIT_DATASETS
  }, [actualUser])

  const USER_DOCUMENTS_LIMIT = useMemo(() => {
    return actualUser ? actualUser.limitDocuments : noUserLimits.LIMIT_DOCUMENTS
  }, [actualUser])

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

  const getToken = useCallback((): string => {
    const cookies = new Cookies()
    const tokenCookie = cookies.get(TOKEN_LOCATION)

    if (tokenCookie) {
      localStorage.setItem(TOKEN_LOCATION, tokenCookie)
    }

    const returnToken = localStorage.getItem(TOKEN_LOCATION) || ""

    return returnToken
  }, [])

  return {
    getToken,
    handleSignIn,
    handleSignOut,
    handleGoogleLogin,
    handleGithubLogin,
    actualUser,
    USER_DATASETS_LIMIT,
    USER_DOCUMENTS_LIMIT,
    fetchUserLoading: loading,
  }
}
