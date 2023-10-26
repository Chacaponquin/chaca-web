import { useModal } from "@modules/modal/hooks"
import React from "react"
import { ModalButtons, ModalTitle } from "./components"

interface Props {
  children: React.ReactNode
  width?: number
  title: string
  handleNext: () => void
  nextText: string
  type: "delete" | "edit"
  nextButtonId?: string
}

export default function ModalContainer({
  children,
  width = 500,
  handleNext,
  nextText,
  title,
  type,
}: Props) {
  const { handleCloseModal } = useModal()

  return (
    <div
      onClick={handleCloseModal}
      id="app-modal"
      className="w-full fixed top-0 left-0 h-screen bg-grayColor/50 z-[999] flex justify-center items-center"
    >
      <form
        className="bg-white dark:bg-darkColorLight flex flex-col rounded-md px-10 py-5 shadow-md text-black dark:text-white"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: `${width}px` }}
      >
        <ModalTitle titleText={title} />

        {children}

        <ModalButtons type={type} handleNext={handleNext} nextText={nextText} />
      </form>
    </div>
  )
}
