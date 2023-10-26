import { useFetch } from "@modules/app/modules/http/hooks"
import { PostProps } from "@modules/app/modules/http/interfaces/fetch"
import { CreateMessageDTO } from "../dto/user_message"
import { API_ROUTES } from "@modules/app/constants/ROUTES"

export default function useUserMessageServices() {
  const { post } = useFetch()

  async function sendMessage(props: PostProps<void, CreateMessageDTO>): Promise<void> {
    post<void, CreateMessageDTO>({
      url: API_ROUTES.CREATE_USER_MESSAGE,
      body: props.body,
      onSuccess: props.onSuccess,
      onError: props.onError,
      onFinally: props.onFinally,
    })
  }

  return { sendMessage }
}
