import { useEffect } from "react"
import { ModalButtons, ModalTitle } from "./components"

interface Props {
  children: React.ReactNode
  width?: number
  title: string
  handleNext: () => void
  nextText: string
  type: "delete" | "edit"
  nextButtonId?: string
  name: string
}

export default function ModalContainer({
  children,
  width = 500,
  handleNext,
  nextText,
  title,
  type,
  nextButtonId,
  name,
}: Props) {
  function handleCloseWithClick(key: KeyboardEvent) {
    if (key.key === "Enter" && !key.shiftKey) {
      handleNext()
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    handleNext()
  }

  function handleClose() {
    document.removeEventListener("keypress", handleCloseWithClick)
  }

  useEffect(() => {
    document.addEventListener("keypress", handleCloseWithClick)

    return () => {
      document.removeEventListener("keypress", handleCloseWithClick)
    }
  }, [handleNext])

  return (
    <div
      onClick={handleClose}
      id={`${name}-modal`}
      className="w-full fixed top-0 left-0 h-screen bg-scale-5/50 z-[999] flex justify-center items-center"
    >
      <form
        className="bg-white dark:bg-scale-3 flex flex-col rounded-md px-10 py-5 shadow-md text-black dark:text-scale-11"
        style={{ minWidth: `${width}px` }}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTitle titleText={title} />
        {children}
        <ModalButtons type={type} nextText={nextText} nextButtonId={nextButtonId} />
      </form>
    </div>
  )
}
