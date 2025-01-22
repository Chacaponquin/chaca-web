import { FetchFunctionsProps } from "@modules/app/modules/http/domain/fetch"
import { Http } from "@modules/app/modules/http/services/http"
import { LoginUser } from "../domain/user"
import { API_ROUTES } from "@modules/app/constants/api-routes"

export function getUserByToken(props: FetchFunctionsProps<LoginUser>): void {
  Http.get({
    url: API_ROUTES.AUTH.GET_USER_BY_TOKEN,
    onError: props.onError,
    onFinally: props.onFinally,
    onSuccess: props.onSuccess,
  })
}
