import { useUserServices } from "@modules/user/services"
import { createContext, ReactElement, useMemo } from "react"
import { useEnvServices } from "../../env/services"
import { io, Socket } from "socket.io-client"

interface SocketContextProps {
  socket: Socket
}

const SocketContext = createContext<SocketContextProps>({} as SocketContextProps)

const SocketProvider = ({ children }: { children: ReactElement }) => {
  const { getToken } = useUserServices()
  const { API_ROUTE } = useEnvServices()

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
