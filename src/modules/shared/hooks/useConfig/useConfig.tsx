import axios from "axios"
import { useCallback, useContext, useEffect, useMemo } from "react"
import Cookies from "universal-cookie"
import { AppConfigContext } from "../../context/AppConfigContext"
import { handleRequestSuccess } from "./utils"

export const useConfig = () => {
  const { language } = useContext(AppConfigContext)

  const getTokenCookie = useCallback((): string => {
    const cookies = new Cookies()
    const tokenCookie = cookies.get("jwt")

    if (tokenCookie) {
      localStorage.setItem("token", tokenCookie)
    }

    const returnToken = localStorage.getItem("token") || ""

    return returnToken
  }, [])

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

  return { axiosInstance, getTokenCookie }
}
