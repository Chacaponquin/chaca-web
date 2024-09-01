import { useCode, useModal } from "@modules/modal/hooks"
import { FormEvent, useEffect } from "react"

interface Props {
  handleNext(): void
}

export default function useModalContainer({ handleNext }: Props) {
  const { openCode, handleSubmit: handleSubmitCode, handleClose: handleCloseCode } = useCode()
  const { handleCloseModal } = useModal()

  function handleSubmit(e: FormEvent): void {
    e.preventDefault()

    if (openCode) {
      handleSubmitCode()
    } else {
      handleNext()
    }
  }

  function handleClose() {
    handleCloseModal()
    handleCloseCode()
  }

  useEffect(() => {
    function action(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", action)

    return () => {
      document.removeEventListener("keydown", action)
    }
  }, [handleClose])

  return { handleClose, handleSubmit }
}
