import { createContext, ReactElement, useState } from "react"

type AppContextProps = {
  handleOpenDropDown: (id: string) => void
  openDropdown: string
  handleCloseDropDown: (id: string) => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const AppProvider = ({ children }: { children: ReactElement }) => {
  const [openDropdown, setOpenDropdown] = useState("")

  const handleOpenDropDown = (id: string) => {
    setOpenDropdown(id)
  }

  const handleCloseDropDown = (id: string) => {
    if (id === openDropdown) setOpenDropdown("")
  }

  const data = {
    handleOpenDropDown,
    openDropdown,
    handleCloseDropDown,
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
