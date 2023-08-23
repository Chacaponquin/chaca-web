import { useContext } from "react"
import { SocketContext } from "../context"

export default function useSocketServices() {
  const { socket } = useContext(SocketContext)

  return { socket }
}
