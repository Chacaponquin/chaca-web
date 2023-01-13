import axios from "axios"
import { useCallback, useContext } from "react"
import Cookies from "universal-cookie"
import { AppConfigContext } from "../context/AppConfigContext"

export const useConfig = () => {
  const { language } = useContext(AppConfigContext)

  const getTokenCookie = useCallback((): string => {
    const cookies = new Cookies()
    const tokenCookie = cookies.get("jwt")

    if (tokenCookie) {
      localStorage.setItem("token", tokenCookie)
    }

    return localStorage.getItem("token") || ""
  }, [])

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  axiosInstance.interceptors.request.use(
    (req) => {
      const token = getTokenCookie()

      if (!req.headers) {
        req.headers = {}
      }

      req.headers.language = language
      req.headers.authorization = `Bearer ${token}`

      return req
    },
    (error) => Promise.reject(error),
  )

  return { axiosInstance, getTokenCookie }
}
