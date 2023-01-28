import { useState, useCallback } from "react"
import { AxiosError } from "axios"
import { useConfig } from "./useConfig"

interface UsePostProps<T, B> {
  onCompleted: (data: T) => void
  onError?: (error: AxiosError) => void
  url: string
  body?: B
}

interface OverwriteProps<B> {
  body?: B
}

type PostReturn<B> = [(body?: OverwriteProps<B>) => void, { loading: boolean; error: boolean }]

export function usePost<T, B>({
  onCompleted,
  onError,
  url,
  body: bodyFunction,
}: UsePostProps<T, B>): PostReturn<B> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { axiosInstance } = useConfig()

  const request = useCallback(
    ({ body }: OverwriteProps<B> = {}): void => {
      setLoading(true)
      setError(false)

      axiosInstance
        .post<T>(url, body || bodyFunction)
        .then(({ data }) => onCompleted(data))
        .catch((error) => {
          setError(true)
          if (onError) onError(error)
        })
        .finally(() => setLoading(false))
    },
    [bodyFunction, axiosInstance],
  )

  return [request, { loading, error }]
}
