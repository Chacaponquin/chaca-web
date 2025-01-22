import { createContext, useState, useEffect } from "react"
import { LoginUser } from "../domain/user"
import { DEFAULT_LIMITS } from "../constants"
import { NoUserLimits } from "../domain/limits"
import { getUserByToken } from "../services/get-user-by-token"

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

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const [actualUser, setActualUser] = useState<LoginUser | null>(null)

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
    userLimits: DEFAULT_LIMITS,
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
