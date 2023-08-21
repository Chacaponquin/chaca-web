import { useState, useCallback } from "react"
import { handleResponseError } from "@modules/shared/utils"
import { ChacaHttpError } from "@modules/shared/interfaces/error.interface"
import { useConfig } from "@modules/shared/modules/app/hooks"

interface UsePostProps<T> {
  onCompleted?: (data: T) => void
  onError?: (error: ChacaHttpError) => void
  url: string
}

interface OverwriteProps<B> {
  body: B
}

type PostReturn<B> = [(body: OverwriteProps<B>) => void, { loading: boolean; error: boolean }]

export function usePost<T, B>({ onCompleted, onError, url }: UsePostProps<T>): PostReturn<B> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { axiosInstance } = useConfig()

  const request = useCallback(
    ({ body }: OverwriteProps<B>): void => {
      setLoading(true)
      setError(false)

      axiosInstance
        .post<T>(url, body)
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
