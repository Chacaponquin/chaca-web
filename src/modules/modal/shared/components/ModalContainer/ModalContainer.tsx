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
  name: string
}

export default function ModalContainer({
  children,
  width = 500,
  handleNext,
  nextText,
  title,
  type,
  name,
}: Props) {
  const { handleCloseModal } = useModal()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    console.log("Hola")
    e.preventDefault()
    handleNext()
  }

  return (
    <div
      onClick={handleCloseModal}
      id={`${name}-modal`}
      className="w-full fixed top-0 left-0 h-screen bg-grayColor/50 z-[999] flex justify-center items-center"
    >
      <form
        className="bg-white dark:bg-darkColorLight flex flex-col rounded-md px-10 py-5 shadow-md text-black dark:text-white"
        style={{ minWidth: `${width}px` }}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTitle titleText={title} />
        {children}
        <ModalButtons type={type} nextText={nextText} />
      </form>
    </div>
  )
}
