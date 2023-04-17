/*eslint-disable */

import { createContext, ReactElement, useEffect, useState } from "react"
import { FileConfigOption, NoUserLimits } from "@modules/config/interfaces/config.iterface"
import { Languages } from "../interfaces/language.interface"
import { Schema } from "@modules/schemas/interfaces/schema.interface"
import { appService } from "../services/appServices.service"

const AppContext = createContext<{
  noUserLimits: NoUserLimits
  schemas: Schema[]
  initialFetchLoading: boolean
  fileConfig: FileConfigOption[]
  language: Languages
  handleOpenDropDown: (id: string) => void
  openDropdown: string
  smallWindow: boolean
  handleCloseDropDown: (id: string) => void
}>({
  noUserLimits: {} as any,
  initialFetchLoading: true,
  schemas: [],
  fileConfig: [],
  language: "en",
  handleOpenDropDown(id) {},
  openDropdown: "",
  smallWindow: false,
  handleCloseDropDown: () => {},
})

const AppProvider = ({ children = <></> }: { children: ReactElement }) => {
  const [openDropdown, setOpenDropdown] = useState("")
  const [smallWindow, setSmallWindow] = useState(false)

  const { initialFetchLoading, noUserLimits, schemas, fileConfig } = appService().appInitFetch()

  // language of the app
  const [language, setLanguage] = useState<Languages>("en")

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

  useEffect(() => {
    const navigatorLanguage = window.navigator.language
    if (navigatorLanguage.includes("en")) {
      setLanguage("en")
    } else if (navigatorLanguage.includes("es")) {
      setLanguage("es")
    } else {
      setLanguage("en")
    }
  }, [window.navigator.language])

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
    language,
    handleOpenDropDown,
    openDropdown,
    smallWindow,
    handleCloseDropDown,
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
