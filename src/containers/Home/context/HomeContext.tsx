import { createContext, createRef, RefObject, useState, useEffect } from "react"

interface HomeContextProps {
  fieldsMenuRef: RefObject<HTMLElement>
  playgroundRef: RefObject<HTMLElement>
  smallWindow: boolean
}

const HomeContext = createContext<HomeContextProps>({ smallWindow: false } as HomeContextProps)

const HomeProvider = ({ children }: { children: React.ReactElement }) => {
  const fieldsMenuRef = createRef<HTMLElement>()
  const playgroundRef = createRef<HTMLElement>()

  const [smallWindow, setSmallWindow] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  function handleWindowResize() {
    const width = window.innerWidth
    if (width >= 1000) {
      setSmallWindow(false)
    } else {
      setSmallWindow(true)
    }
  }

  const data: HomeContextProps = {
    fieldsMenuRef,
    playgroundRef,
    smallWindow,
  }

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}

export { HomeContext, HomeProvider }
