import { useState, useCallback } from "react"
import { useConfig } from "@modules/app/hooks"
import { ChacaHttpError } from "../../interfaces/error"
import { handleResponseError } from "../../utils"

interface UsePutProps<T> {
  onCompleted?: (data: T) => void
  onError?: (error: ChacaHttpError) => void
  url: string
}

interface OverwriteProps<B> {
  body: B
}

type PostReturn<B> = [(body: OverwriteProps<B>) => void, { loading: boolean; error: boolean }]

export function usePut<T, B>({ onCompleted, onError, url }: UsePutProps<T>): PostReturn<B> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { axiosInstance } = useConfig()

  const request = useCallback(
    ({ body }: OverwriteProps<B>): void => {
      setLoading(true)
      setError(false)

      axiosInstance
        .put<T>(url, body)
        .then(({ data }) => {
          if (onCompleted) onCompleted(data)
        })
        .catch((error) => {
          setError(true)
          if (onError) onError(handleResponseError(error))
        })
        .finally(() => setLoading(false))
    },
    [axiosInstance, onCompleted, onError],
  )

  return [request, { loading, error }]
}
