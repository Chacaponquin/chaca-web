import { createContext, createRef, RefObject, useState, useEffect } from "react"

interface HomeContextProps {
  fieldsMenuRef: RefObject<HTMLElement>
  playgroundRef: RefObject<HTMLDivElement>
  smallWindow: boolean
}

const HomeContext = createContext<HomeContextProps>({ smallWindow: false } as HomeContextProps)

function HomeProvider({ children }: { children: React.ReactElement }) {
  const fieldsMenuRef = createRef<HTMLElement>()
  const playgroundRef = createRef<HTMLDivElement>()

  const [smallWindow, setSmallWindow] = useState(false)

  function handleWindowResize() {
    const width = window.innerWidth
    if (width >= 1000) {
      setSmallWindow(false)
    } else {
      setSmallWindow(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [window])

  const data: HomeContextProps = {
    fieldsMenuRef,
    playgroundRef,
    smallWindow,
  }

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}

export { HomeContext, HomeProvider }
