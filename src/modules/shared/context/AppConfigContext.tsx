/*eslint-disable */

import { createContext, ReactElement, useEffect, useState } from "react"
import { FileConfigOption, NoUserLimits } from "@modules/config/interfaces/config.iterface"
import { Languages } from "../interfaces/language.interface"
import { Schema } from "@modules/schemas/interfaces/schema.interface"
import { appService } from "../services/appServices.service"

const AppConfigContext = createContext<{
  noUserLimits: NoUserLimits
  schemas: Schema[]
  initialFetchLoading: boolean
  fileConfig: FileConfigOption[]
  language: Languages
  handleOpenDropDown: (id: string) => void
  openDropdown: string
  smallWindow: boolean
}>({
  noUserLimits: {} as any,
  initialFetchLoading: true,
  schemas: [],
  fileConfig: [],
  language: "en",
  handleOpenDropDown(id) {},
  openDropdown: "",
  smallWindow: false,
})

const AppConfigProvider = ({ children = <></> }: { children: ReactElement }) => {
  const [openDropdown, setOpenDropdown] = useState("")
  const [smallWindow, setSmallWindow] = useState(true)

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

  const data = {
    initialFetchLoading,
    schemas,
    fileConfig,
    noUserLimits,
    language,
    handleOpenDropDown,
    openDropdown,
    smallWindow,
  }

  return <AppConfigContext.Provider value={data}>{children}</AppConfigContext.Provider>
}

export { AppConfigContext, AppConfigProvider }
