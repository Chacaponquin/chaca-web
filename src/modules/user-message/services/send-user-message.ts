import { PostProps } from "@modules/app/modules/http/domain/fetch"
import { CreateMessageDTO } from "../dto/user_message"
import { API_ROUTES } from "@modules/app/constants/api-routes"
import { Http } from "@modules/app/modules/http/services/http"

export function sendMessage(props: PostProps<void, CreateMessageDTO>): void {
  Http.post<void, CreateMessageDTO>({
    url: API_ROUTES.CREATE_USER_MESSAGE,
    body: props.body,
    onSuccess: props.onSuccess,
    onError: props.onError,
    onFinally: props.onFinally,
  })
}
