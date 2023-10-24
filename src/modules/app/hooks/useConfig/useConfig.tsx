import axios from "axios"
import { useEffect, useMemo } from "react"
import { handleRequestSuccess } from "./utils"
import { useUser } from "@modules/user/hooks"
import { useLanguageContext } from "@modules/app/modules/language/hooks"
import { useEnv } from "@modules/app/modules/env/hooks"

export const useConfig = () => {
  const { language } = useLanguageContext()
  const { getToken } = useUser()
  const { API_ROUTE } = useEnv()

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: API_ROUTE,
      }),
    [],
  )

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      (req) => handleRequestSuccess(req, getToken(), language),
      (error) => {
        Promise.reject(error)
      },
    )
  }, [language])

  return { axiosInstance }
}
