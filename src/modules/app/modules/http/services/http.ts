import { GetProps, PostProps } from "../domain/fetch"
import { instance } from "../domain/instance"

export class Http {
  static get<T>(props: GetProps<T>): void {
    instance
      .get<T>(props.url, {})
      .then((data) => {
        props.onSuccess(data.data)
      })
      .catch((error) => {
        props.onError(error)
      })
      .finally(() => {
        props.onFinally()
      })
  }

  static post<T, B>(props: PostProps<T, B> & { url: string }): void {
    instance
      .post<T>(props.url, props.body)
      .then((data) => {
        props.onSuccess(data.data)
      })
      .catch((error) => {
        props.onError(error)
      })
      .finally(() => {
        props.onFinally()
      })
  }
}
