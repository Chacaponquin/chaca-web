import { useState } from "react"
import { AxiosError } from "axios"
import { useConfig } from "./useConfig"

interface UsePostProps<T> {
  onCompleted: (data: T) => void
  onError?: (error: AxiosError) => void
  url: string
  body?: { [path: string]: unknown }
}

interface OverwriteProps {
  body?: { [path: string]: unknown }
}

type PostReturn = [(body?: OverwriteProps) => void, { loading: boolean; error: boolean }]

export function usePost<T>({
  onCompleted,
  onError,
  url,
  body: bodyFunction,
}: UsePostProps<T>): PostReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { axiosInstance } = useConfig()

  const request = ({ body }: OverwriteProps = {}): void => {
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
  }

  return [request, { loading, error }]
}
