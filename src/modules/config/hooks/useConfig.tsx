import { useContext } from "react"
import { ConfigContext } from "../context"

export default function useConfig() {
  const { fileOptions, loading } = useContext(ConfigContext)

  return {
    fileOptions,
    loading,
  }
}
