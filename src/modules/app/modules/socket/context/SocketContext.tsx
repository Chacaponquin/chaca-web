import { createContext, useMemo } from "react"
import { useEnv } from "../../env/hooks"
import { io, Socket } from "socket.io-client"
import { getToken } from "@modules/user/services/get-token"

interface Props {
  socket: Socket
}

export const SocketContext = createContext<Props>({} as Props)

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const { SOCKET_URL } = useEnv()

  const socket = useMemo(() => {
    return io(SOCKET_URL, {
      auth: {
        token: `Bearer ${getToken()}`,
      },
    })
  }, [])

  const data = { socket }

  return <SocketContext.Provider value={data}>{children}</SocketContext.Provider>
}
