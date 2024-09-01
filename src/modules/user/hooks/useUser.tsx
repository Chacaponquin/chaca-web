import Cookies from "universal-cookie"
import { useCallback, useContext } from "react"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnv } from "@modules/app/modules/env/hooks"
import { UserContext } from "../context"
import { useLocalStorage } from "@modules/app/hooks"
import { STORAGE_KEYS } from "@modules/app/constants"

export default function useUser() {
  const { API_ROUTE } = useEnv()
  const { set, remove, get } = useLocalStorage()
  const { actualUser, loading, userLimits } = useContext(UserContext)

  function handleSignIn(token: string) {
    set(STORAGE_KEYS.ACCESS_TOKEN, token)
    window.location.reload()
  }

  function handleSignOut() {
    remove(STORAGE_KEYS.ACCESS_TOKEN)
    window.location.reload()
  }

  function handleGoogleLogin() {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH.GOOGLE_AUTH}`, "_self")
  }

  function handleGithubLogin() {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH.GITHUB_AUTH}`, "_self")
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
    fetchUserLoading: loading,
    userLimits,
  }
}
