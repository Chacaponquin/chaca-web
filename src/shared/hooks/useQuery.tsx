import { useEffect, useState } from "react"
import { axiosInstance } from "../routes/api/API_ROUTES"

interface UsePostProps<T> {
  onCompleted: (data: T) => void
  onError?: (error: Error) => void
  url: string
}

export function useQuery<T>({ onCompleted, onError, url }: UsePostProps<T>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (url) {
      setLoading(true)
      axiosInstance
        .get<T>(url)
        .then(({ data }) => onCompleted(data))
        .catch((error) => {
          setError(true)
          if (onError) onError(error)
        })
        .finally(() => setLoading(false))
    }
  }, [url])

  return { loading, error }
}

export function useLazyQuery<T>({ url, onCompleted, onError }: UsePostProps<T>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const request = () => {
    setLoading(true)
    axiosInstance
      .get<T>(url)
      .then(({ data }) => onCompleted(data))
      .catch((err) => {
        setError(true)
        if (onError) onError(err)
      })
      .finally(() => setLoading(false))
  }

  return [request, { loading, error }]
}
