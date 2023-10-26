import { ChacaHttpError } from "./error"

export interface FetchFunctionsProps<T> {
  onSuccess?: (data: T) => void
  onError?: (error: ChacaHttpError) => void
  onFinally?: () => void
}

export interface FetchProps<T> extends FetchFunctionsProps<T> {
  url: string
}
