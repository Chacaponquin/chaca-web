/*eslint-disable */

import { createContext, useState, ReactElement } from "react"
import { useQuery } from "@modules/shared/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { LoginUser } from "../interfaces/user.interface"

const UserContext = createContext<{
  actualUser: LoginUser | null
  loading: boolean
}>({
  actualUser: null,
  loading: true,
})

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [actualUser, setActualUser] = useState<LoginUser | null>(null)

  const { loading } = useQuery<LoginUser>({
    url: API_ROUTES.AUTH_ROUTES.GET_USER_BY_TOKEN,
    onCompleted: (user) => {
      setActualUser(user)
    },
    onError: () => {
      setActualUser(null)
    },
  })

  const data = {
    actualUser,
    loading,
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
