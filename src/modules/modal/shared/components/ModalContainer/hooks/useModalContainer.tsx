import { useCode, useModal } from "@modules/modal/hooks"
import { useEffect } from "react"

interface Props {
  handleNext(): void
}

export default function useModalContainer({ handleNext }: Props) {
  const { openCode, handleSubmit: handleSubmitCode } = useCode()
  const { handleCloseModal } = useModal()

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault()
    e.stopPropagation()

    if (openCode) {
      handleSubmitCode()
    } else {
      handleNext()
    }
  }

  function handleClose() {
    handleCloseModal()
  }

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
