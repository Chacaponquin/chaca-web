import { createContext, useState, ReactElement } from "react"
import { useQuery } from "@modules/app/modules/http/hooks"
import { LoginUser } from "../interfaces/user.interface"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { NoUserLimits } from "@modules/config/interfaces/config.iterface"
import { DEFAULT_LIMITS } from "../constants"

interface UserContextProps {
  actualUser: LoginUser | null
  loading: boolean
  noUserLimits: NoUserLimits
}

const UserContext = createContext<UserContextProps>({
  actualUser: null,
  loading: true,
  noUserLimits: DEFAULT_LIMITS,
} as UserContextProps)

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [actualUser, setActualUser] = useState<LoginUser | null>(null)
  const [noUserLimits, setNoUserLimits] = useState<NoUserLimits>(DEFAULT_LIMITS)

  const { loading } = useQuery<LoginUser>({
    url: API_ROUTES.AUTH_ROUTES.GET_USER_BY_TOKEN,
    onCompleted: (user) => {
      setActualUser(user)
    },
    onError: () => {
      setActualUser(null)
    },
  })

  useQuery<NoUserLimits>({
    url: API_ROUTES.GET_NO_USER_LIMITS,
    onCompleted: (data) => {
      setNoUserLimits(data)
    },
  })

  const data = {
    actualUser,
    loading,
    noUserLimits,
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
