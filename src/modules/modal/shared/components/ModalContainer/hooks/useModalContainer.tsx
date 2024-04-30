import { useCode, useModal } from "@modules/modal/hooks"
import { useEffect } from "react"

interface Props {
  handleNext(): void
}

export default function useModalContainer({ handleNext }: Props) {
  const { openCode, handleSubmit: handleSubmitCode } = useCode()
  const { handleCloseModal } = useModal()

  function handleCloseWithClick(key: KeyboardEvent) {
    if (key.key === "Enter" && !key.shiftKey) {
      handleNext()
    }
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault()

    if (openCode) {
      handleSubmitCode()
    } else {
      handleNext()
    }
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

  useEffect(() => {
    function action(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleCloseModal()
      }
    }

    document.addEventListener("keydown", action)

    return () => {
      document.removeEventListener("keydown", action)
    }
  }, [handleCloseModal])

  return { handleClose, handleSubmit }
}
