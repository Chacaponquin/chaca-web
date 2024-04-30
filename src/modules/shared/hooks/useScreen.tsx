import { useEffect, useState } from "react"

export default function useScreen(size: number) {
  const [condition, setcondition] = useState(true)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth

      if (width > size) {
        setcondition(true)
      } else {
        setcondition(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { condition }
}
