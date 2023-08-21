import { createContext, ReactElement, useEffect, useState } from "react"
import { FileConfigOption, NoUserLimits } from "@modules/config/interfaces/config.iterface"
import { Schema } from "@modules/schemas/interfaces/schema.interface"
import { appService } from "../services/appServices"

type AppContextProps = {
  noUserLimits: NoUserLimits
  schemas: Schema[]
  initialFetchLoading: boolean
  fileConfig: FileConfigOption[]
  handleOpenDropDown: (id: string) => void
  openDropdown: string
  smallWindow: boolean
  handleCloseDropDown: (id: string) => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const AppProvider = ({ children }: { children: ReactElement }) => {
  const [openDropdown, setOpenDropdown] = useState("")
  const [smallWindow, setSmallWindow] = useState(false)

  const { initialFetchLoading, noUserLimits, schemas, fileConfig } = appService().appInitFetch()

  useEffect(() => {
    function handleWindowResize() {
      const width = window.innerWidth
      if (width >= 1000) {
        setSmallWindow(false)
      } else {
        setSmallWindow(true)
      }
    }

    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  const handleOpenDropDown = (id: string) => {
    setOpenDropdown(id)
  }

  const handleCloseDropDown = (id: string) => {
    if (id === openDropdown) setOpenDropdown("")
  }

  const data = {
    initialFetchLoading,
    schemas,
    fileConfig,
    noUserLimits,
    handleOpenDropDown,
    openDropdown,
    smallWindow,
    handleCloseDropDown,
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
