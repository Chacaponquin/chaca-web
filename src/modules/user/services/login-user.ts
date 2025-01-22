import { API_ROUTES } from "@modules/app/constants/api-routes"
import { PostProps } from "@modules/app/modules/http/domain/fetch"
import { Http } from "@modules/app/modules/http/services/http"
import { LoginUserDTO } from "../dto/write/login"

export function loginUser(props: PostProps<string, LoginUserDTO>): void {
  Http.post({
    url: API_ROUTES.AUTH.LOGIN,
    body: props.body,
    onError: props.onError,
    onSuccess: props.onSuccess,
    onFinally: props.onFinally,
  })
}
