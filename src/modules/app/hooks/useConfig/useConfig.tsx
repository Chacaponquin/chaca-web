import axios from "axios"
import { useEffect, useMemo } from "react"
import { handleRequestSuccess } from "./utils"
import { useUserServices } from "@modules/user/services"
import { useLanguageService } from "@modules/app/modules/language/services"

export const useConfig = () => {
  const { language } = useLanguageService()
  const { getTokenCookie } = useUserServices()

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      }),
    [],
  )

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      (req) => handleRequestSuccess(req, getTokenCookie(), language),
      (error) => {
        Promise.reject(error)
      },
    )
  }, [language])

  return { axiosInstance }
}
