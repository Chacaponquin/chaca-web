import { useContext } from "react"
import { LocalStorage } from "@modules/app/services/local-storage"
import { STORAGE_KEYS } from "@modules/app/constants/storage-keys"
import { API_ROUTES } from "@modules/app/constants/api-routes"
import { API_ROUTE } from "@modules/app/modules/env/domain/env"
import { UserContext } from "../context/UserContext"

export default function useUser() {
  const { actualUser, loading, userLimits } = useContext(UserContext)

  function handleSignIn(token: string) {
    LocalStorage.set(STORAGE_KEYS.ACCESS_TOKEN, token)
    window.location.reload()
  }

  function handleSignOut() {
    LocalStorage.remove(STORAGE_KEYS.ACCESS_TOKEN)
    window.location.reload()
  }

  function handleGoogleLogin() {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH.GOOGLE_AUTH}`, "_self")
  }

  function handleGithubLogin() {
    window.open(`${API_ROUTE}${API_ROUTES.AUTH.GITHUB_AUTH}`, "_self")
  }

  return {
    handleSignIn,
    handleSignOut,
    handleGoogleLogin,
    handleGithubLogin,
    actualUser,
    fetchUserLoading: loading,
    userLimits,
  }
}
