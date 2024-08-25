import { createContext, useState, ReactElement, useEffect } from "react"
import { LoginUser } from "../interfaces/user"
import { NoUserLimits } from "@modules/config/domain/core"
import { DEFAULT_LIMITS } from "../constants"
import { useUserServices } from "../services"

interface Props {
  actualUser: LoginUser | null
  loading: boolean
  noUserLimits: NoUserLimits
}

const UserContext = createContext<Props>({
  actualUser: null,
  loading: true,
  noUserLimits: DEFAULT_LIMITS,
})

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(false)
  const [actualUser, setActualUser] = useState<LoginUser | null>(null)
  const [noUserLimits, setNoUserLimits] = useState<NoUserLimits>(DEFAULT_LIMITS)

  const { getNoUserLimits, getUserByToken } = useUserServices()

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

  useEffect(() => {
    getNoUserLimits({
      onSuccess: (data) => {
        setNoUserLimits(data)
      },
    })
  }, [])

  const data = {
    actualUser,
    loading,
    noUserLimits,
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
