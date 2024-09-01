import { useFetch } from "@modules/app/modules/http/hooks"
import { LoginUserDTO, SignUpUserDTO } from "../dto/user"
import { FetchFunctionsProps, PostProps } from "@modules/app/modules/http/interfaces/fetch"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { LoginUser } from "../interfaces/user"

export default function useUserServices() {
  const { post, get } = useFetch()

  async function loginUser(props: PostProps<string, LoginUserDTO>): Promise<void> {
    post({
      url: API_ROUTES.AUTH.LOGIN,
      body: props.body,
      onError: props.onError,
      onSuccess: props.onSuccess,
      onFinally: props.onFinally,
    })
  }

  async function signUpUser(props: PostProps<string, SignUpUserDTO>): Promise<void> {
    post({
      url: API_ROUTES.AUTH.SIGN_UP,
      body: props.body,
      onError: props.onError,
      onSuccess: props.onSuccess,
      onFinally: props.onFinally,
    })
  }

  async function getUserByToken(props: FetchFunctionsProps<LoginUser>): Promise<void> {
    get({
      url: API_ROUTES.AUTH.GET_USER_BY_TOKEN,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    })
  }

  return { loginUser, signUpUser, getUserByToken }
}
