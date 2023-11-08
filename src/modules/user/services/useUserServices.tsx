import { useFetch } from "@modules/app/modules/http/hooks"
import { LoginUserDTO, SignUpUserDTO } from "../dto/user"
import { FetchFunctionsProps, PostProps } from "@modules/app/modules/http/interfaces/fetch"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { NoUserLimits } from "@modules/config/interfaces"
import { LoginUser } from "../interfaces/user"

export default function useUserServices() {
  const { post, get } = useFetch()

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

  async function getNoUserLimits(props: FetchFunctionsProps<NoUserLimits>): Promise<void> {
    get({
      url: API_ROUTES.GET_NO_USER_LIMITS,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    })
  }

  async function getUserByToken(props: FetchFunctionsProps<LoginUser>): Promise<void> {
    get({
      url: API_ROUTES.AUTH_ROUTES.GET_USER_BY_TOKEN,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    })
  }

  return { loginUser, signUpUser, getNoUserLimits, getUserByToken }
}
