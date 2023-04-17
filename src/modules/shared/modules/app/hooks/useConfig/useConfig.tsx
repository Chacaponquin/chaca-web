import axios from "axios"
import { useContext, useEffect, useMemo } from "react"
import { AppContext } from "../../context/index"
import { handleRequestSuccess } from "./utils"
import { userServices } from "@modules/user/services"

export const useConfig = () => {
  const { language } = useContext(AppContext)
  const { getTokenCookie } = userServices()

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
