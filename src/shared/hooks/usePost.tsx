import { useState } from 'react'
import { axiosInstance } from '../routes/api/API_ROUTES'
import { AxiosError } from 'axios'

interface UsePostProps<T> {
  onCompleted: (data: T) => void
  onError: (error: AxiosError) => void
  url: string
  body?: { [path: string]: any }
}

interface OverwriteProps {
  body?: { [path: string]: any }
}

export function usePost<T>({
  onCompleted,
  onError,
  url,
  body: bodyFunction,
}: UsePostProps<T>): [(data?: OverwriteProps) => void, { loading: boolean }] {
  const [loading, setLoading] = useState(false)

  const request = ({ body }: OverwriteProps = {}): void => {
    setLoading(true)
    axiosInstance
      .post<T>(url, { data: body || bodyFunction })
      .then(({ data }) => onCompleted(data))
      .catch((error) => onError(error))
      .finally(() => setLoading(false))
  }

  return [request, { loading }]
}
