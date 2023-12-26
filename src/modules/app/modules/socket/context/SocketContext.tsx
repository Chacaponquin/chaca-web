import { useUser } from "@modules/user/hooks"
import { createContext, ReactElement, useMemo } from "react"
import { useEnv } from "../../env/hooks"
import { io, Socket } from "socket.io-client"

interface Props {
  socket: Socket
}

const SocketContext = createContext<Props>({} as Props)

function SocketProvider({ children }: { children: ReactElement }) {
  const { getToken } = useUser()
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

export { SocketContext, SocketProvider }
