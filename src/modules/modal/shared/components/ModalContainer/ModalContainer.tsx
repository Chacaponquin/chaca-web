import { ModalButtons, ModalTitle } from "./components"
import clsx from "clsx"
import { useModalContainer } from "./hooks"

interface Props {
  children: React.ReactNode
  title: string
  handleNext(): void
  nextText: string
  type: "delete" | "edit"
  name: string
}

export default function ModalContainer({
  children,
  handleNext,
  nextText,
  title,
  type,
  name,
}: Props) {
  const { handleClose, handleSubmit } = useModalContainer({ handleNext: handleNext })

  const CLASS = clsx(
    "flex justify-center items-center",
    "w-full min-h-screen",
    "px-3 py-4",
    "absolute top-0 left-0",
    "z-[999]",
    "bg-scale-5/50",
    "overflow-y-auto",
  )

  const FORM_CLASS = clsx(
    "flex flex-col",
    "w-full max-w-[650px]",
    "bg-white dark:bg-scale-3",
    "px-10 py-5 esm:px-8",
    "text-black dark:text-scale-11",
    "shadow-lg",
    "rounded-md",
  )

  return (
    <div onClick={handleClose} id={`${name}-modal`} className={CLASS}>
      <form className={FORM_CLASS} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <ModalTitle titleText={title} />
        {children}
        <ModalButtons type={type} nextText={nextText} />
      </form>
    </div>
  )
}
