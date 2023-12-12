import { useUser } from "@modules/user/hooks"
import { createContext, ReactElement, useMemo } from "react"
import { useEnv } from "../../env/hooks"
import { io, Socket } from "socket.io-client"

interface Props {
  socket: Socket
}

const SocketContext = createContext<Props>({} as Props)

const SocketProvider = ({ children }: { children: ReactElement }) => {
  const { getToken } = useUser()
  const { API_ROUTE } = useEnv()

  const socket = useMemo(
    () =>
      io(API_ROUTE, {
        auth: {
          token: `Bearer ${getToken()}`,
        },
      }),
    [],
  )

  const data = { socket }

  return <SocketContext.Provider value={data}>{children}</SocketContext.Provider>
}

export { SocketContext, SocketProvider }
