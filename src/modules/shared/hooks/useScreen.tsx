import { useEffect, useState } from "react"

export default function useScreen(size: number) {
  const [bigScreen, setBigScreen] = useState(true)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth

      if (width > size) {
        setBigScreen(true)
      } else {
        setBigScreen(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { bigScreen }
}
