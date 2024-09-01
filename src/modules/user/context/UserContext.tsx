import { createContext, useState, ReactElement, useEffect } from "react"
import { LoginUser } from "../interfaces/user"
import { DEFAULT_LIMITS } from "../constants"
import { useUserServices } from "../services"
import { NoUserLimits } from "../domain/limits"

interface Props {
  actualUser: LoginUser | null
  loading: boolean
  userLimits: NoUserLimits
}

export const UserContext = createContext<Props>({
  actualUser: null,
  loading: true,
  userLimits: DEFAULT_LIMITS,
})

export function UserProvider({ children }: { children: ReactElement }) {
  const [loading, setLoading] = useState(false)
  const [actualUser, setActualUser] = useState<LoginUser | null>(null)
  const userLimits = DEFAULT_LIMITS

  const { getUserByToken } = useUserServices()

  useEffect(() => {
    setLoading(true)

    getUserByToken({
      onSuccess: (user) => {
        setActualUser(user)
      },
      onError: () => {
        setActualUser(null)
      },
      onFinally: () => {
        setLoading(false)
      },
    })
  }, [])

  const data: Props = {
    actualUser,
    loading,
    userLimits,
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
