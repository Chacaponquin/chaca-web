import { useContext } from "react"
import { ModulesContext } from "../context/ModulesContext"

export default function useModules() {
  const { modules, loading, fetch, version } = useContext(ModulesContext)

  return { modules, loading, fetch, version }
}
