import { AxiosRequestConfig } from "axios"

export function handleRequestSuccess(req: AxiosRequestConfig, token: string, language: string) {
  if (!req.headers) {
    req.headers = {}
  }

  req.headers.language = language
  req.headers.authorization = `Bearer ${token}`

  return req
}
