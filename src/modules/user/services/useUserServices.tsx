import { useFetch } from "@modules/app/modules/http/hooks"
import { LoginUserDTO, SignUpUserDTO } from "../dto/user"
import { PostProps } from "@modules/app/modules/http/interfaces/fetch"
import { API_ROUTES } from "@modules/app/constants/ROUTES"

export default function useUserServices() {
  const { post } = useFetch()

  async function loginUser(props: PostProps<string, LoginUserDTO>): Promise<void> {
    post({
      url: API_ROUTES.AUTH_ROUTES.LOGIN,
      body: props.body,
      onError: props.onError,
      onSuccess: props.onSuccess,
      onFinally: props.onFinally,
    })
  }

  async function signUpUser(props: PostProps<string, SignUpUserDTO>): Promise<void> {
    post({
      url: API_ROUTES.AUTH_ROUTES.SIGN_UP,
      body: props.body,
      onError: props.onError,
      onSuccess: props.onSuccess,
      onFinally: props.onFinally,
    })
  }

  return { loginUser, signUpUser }
}
