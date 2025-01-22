import axios from "axios"
import { API_ROUTE } from "../../env/domain/env"
import { getToken } from "@modules/user/services/get-token"

const instance = axios.create({
  baseURL: API_ROUTE,
  headers: {
    authorization: `Bearer ${getToken()}`,
  },
})

instance.interceptors.request.use(undefined, (error) => {
  Promise.reject(error)
})

export { instance }
