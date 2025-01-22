import { STORAGE_KEYS } from "@modules/app/constants/storage-keys"
import { LocalStorage } from "@modules/app/services/local-storage"
import Cookies from "universal-cookie"

export const getToken = (): string => {
  const cookies = new Cookies()
  const tokenCookie = cookies.get(STORAGE_KEYS.ACCESS_TOKEN)

  if (tokenCookie) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokenCookie)
  }

  const returnToken = LocalStorage.get(STORAGE_KEYS.ACCESS_TOKEN) || ""

  return returnToken
}
