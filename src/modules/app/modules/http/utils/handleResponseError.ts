/* eslint-disable*/
import axios from "axios"
import { ChacaHttpError, RespHttpError } from "../domain/error"

export function handleResponseError(error: any): ChacaHttpError {
  const returnError: ChacaHttpError = { message: "", status: 500 }

  if (axios.isAxiosError(error)) {
    returnError.status = error?.response?.status || 500
    const errorData = error?.response?.data as RespHttpError
    returnError.message = errorData?.error?.message || ""
  }

  return returnError
}
