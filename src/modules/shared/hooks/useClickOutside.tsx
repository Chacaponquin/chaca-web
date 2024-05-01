import { RefObject, useEffect } from "react"

interface Props {
  onClickOutside(): void
  element: RefObject<HTMLDivElement>
}

export default function useClickOutside({ onClickOutside, element }: Props) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (element.current && !element.current.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClickOutside])

  return {}
}
