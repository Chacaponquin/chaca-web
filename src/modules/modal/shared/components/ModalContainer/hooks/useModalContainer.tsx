import { useModal } from "@modules/modal/hooks"
import { useEffect } from "react"

interface Props {
  handleNext(): void
}

export default function useModalContainer({ handleNext }: Props) {
  const { handleCloseModal } = useModal()

  function handleCloseWithClick(key: KeyboardEvent) {
    if (key.key === "Enter" && !key.shiftKey) {
      handleNext()
    }
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault()
    handleNext()
  }

  function handleClose() {
    document.removeEventListener("keypress", handleCloseWithClick)
    handleCloseModal()
  }

  useEffect(() => {
    document.addEventListener("keypress", handleCloseWithClick)

    return () => {
      document.removeEventListener("keypress", handleCloseWithClick)
    }
  }, [handleNext])

  return { handleClose, handleSubmit }
}
