import { ChacaHttpError } from "@modules/shared/interfaces/error.interface"
import { useConfig } from "@modules/shared/modules/app/hooks"
import { handleResponseError } from "@modules/shared/utils"
import { useEffect, useState } from "react"

interface QueryProps<T> {
  onCompleted: (data: T) => void
  onError?: (error: ChacaHttpError) => void
  url: string
}

export function useQuery<T>({ onCompleted, onError, url }: QueryProps<T>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { axiosInstance } = useConfig()

  useEffect(() => {
    if (url) {
      setLoading(true)
      axiosInstance
        .get<T>(url)
        .then(({ data }) => onCompleted(data))
        .catch((error) => {
          setError(true)
          if (onError) onError(handleResponseError(error))
        })
        .finally(() => setLoading(false))
    }

    return () => {
      return
    }
  }, [url])

  return { loading, error }
}
