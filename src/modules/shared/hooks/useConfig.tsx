import axios from "axios"
import { useCallback, useContext, useEffect, useMemo } from "react"
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
      (req) => {
        const token = getTokenCookie()

        if (!req.headers) {
          req.headers = {}
        }

        req.headers.language = language
        req.headers.authorization = `Bearer ${token}`

        return req
      },
      (error) => {
        console.log(error)
        Promise.reject(error)
      },
    )
  }, [language])

  return { axiosInstance, getTokenCookie }
}
