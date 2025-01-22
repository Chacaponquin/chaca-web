import { API_ROUTES } from "@modules/app/constants/api-routes"
import { PostProps } from "@modules/app/modules/http/domain/fetch"
import { Http } from "@modules/app/modules/http/services/http"
import { SignUpUserDTO } from "../dto/write/sign-up"

export function signUpUser(props: PostProps<string, SignUpUserDTO>): void {
  Http.post({
    url: API_ROUTES.AUTH.SIGN_UP,
    body: props.body,
    onError: props.onError,
    onSuccess: props.onSuccess,
    onFinally: props.onFinally,
  })
}
