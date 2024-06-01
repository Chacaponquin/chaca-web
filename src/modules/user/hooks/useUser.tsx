import Cookies from "universal-cookie"
import { useCallback, useContext, useMemo } from "react"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnv } from "@modules/app/modules/env/hooks"
import { UserContext } from "../context"
import { useLocalStorage } from "@modules/app/hooks"
import { STORAGE_KEYS } from "@modules/app/constants"

export default function useUser() {
  const { API_ROUTE } = useEnv()
  const { set, remove, get } = useLocalStorage()
  const { actualUser, noUserLimits, loading } = useContext(UserContext)

  const USER_DATASETS_LIMIT = useMemo(() => {
    return actualUser ? actualUser.limitDatasets : noUserLimits.LIMIT_DATASETS
  }, [actualUser])

  const USER_DOCUMENTS_LIMIT = useMemo(() => {
    return actualUser ? actualUser.limitDocuments : noUserLimits.LIMIT_DOCUMENTS
  }, [actualUser])

  function handleSignIn(token: string) {
    set(STORAGE_KEYS.ACCESS_TOKEN, token)
    window.location.reload()
  }

  function handleSignOut() {
    remove(STORAGE_KEYS.ACCESS_TOKEN)
    window.location.reload()
  }

  function handleGoogleLogin() {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH_ROUTES.GOOGLE_AUTH}`, "_self")
  }

  function handleGithubLogin() {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH_ROUTES.GITHUB_AUTH}`, "_self")
  }

  const getToken = useCallback((): string => {
    const cookies = new Cookies()
    const tokenCookie = cookies.get(STORAGE_KEYS.ACCESS_TOKEN)

    if (tokenCookie) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokenCookie)
    }

    const returnToken = get(STORAGE_KEYS.ACCESS_TOKEN) || ""

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
