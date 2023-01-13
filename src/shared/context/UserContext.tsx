/*eslint-disable */

import { createContext, useState, ReactElement, useEffect, useMemo } from "react"
import { useQuery } from "../hooks/useQuery"
import { API_ROUTES } from "../routes/api/API_ROUTES"
import io, { Socket } from "socket.io-client"
import { LoginUser } from "../interfaces/user.interface"
import { useConfig } from "../hooks"

const UserContext = createContext<{
  actualUser: LoginUser | null
  handleSignIn: (token: string) => void
  handleSignOut: () => void
  loading: boolean
  socket: Socket
}>({
  actualUser: null,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loading: true,
  socket: null!,
})

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [actualUser, setActualUser] = useState<LoginUser | null>(null)

  const { getTokenCookie } = useConfig()

  const handleSignIn = (token: string) => {
    localStorage.setItem("token", token)
    window.location.reload()
  }

  const socket = useMemo(
    () =>
      io(process.env.REACT_APP_SOCKET_URL as string, {
        auth: {
          token: `Bearer ${getTokenCookie()}`,
        },
      }),
    [],
  )

  useEffect(() => {
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000)
    })

    return () => {
      socket.off("connect")
      socket.off("disconnect")
    }
  }, [])

  const { loading } = useQuery<LoginUser>({
    url: API_ROUTES.AUTH_ROUTES.GET_USER_BY_TOKEN,
    onCompleted: (user) => {
      setActualUser(user)
    },
    onError: () => {
      setActualUser(null)
    },
  })

  const handleSignOut = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  const data = {
    handleSignIn,
    actualUser,
    loading,
    handleSignOut,
    socket,
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export default UserProvider
export { UserContext }
