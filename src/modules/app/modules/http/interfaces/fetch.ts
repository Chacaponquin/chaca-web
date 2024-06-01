import { ChacaHttpError } from "./error"

export type FetchFunctionsProps<T> = Partial<{
  onSuccess(data: T): void
  onError(error: ChacaHttpError): void
  onFinally(): void
}>

export interface FetchProps<T> extends FetchFunctionsProps<T> {
  url: string
}

export interface GetProps<T> extends FetchProps<T> {}

export interface PostProps<T, B> extends FetchFunctionsProps<T> {
  body: B
}
