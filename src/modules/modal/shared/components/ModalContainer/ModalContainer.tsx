import { Code, CodeButtons, FormButtons, ModalTitle } from "./components"
import clsx from "clsx"
import { useModalContainer } from "./hooks"
import { useCode } from "@modules/modal/hooks"

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
  const { openCode } = useCode()
  const { handleClose, handleSubmit } = useModalContainer({ handleNext })

  const CLASS = clsx(
    "flex justify-center items-center",
    "w-full min-h-screen",
    "px-3 py-4",
    "absolute top-0 left-0",
    "z-30",
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
    "animate-fade-down animate-once animate-duration-500 animate-ease-in-out",
  )

  return (
    <div onClick={handleClose} id={`${name}-modal`} className={CLASS}>
      <form onSubmit={handleSubmit} className={FORM_CLASS} onClick={(e) => e.stopPropagation()}>
        <ModalTitle title={title} />

        {openCode ? <Code language={openCode.language} /> : children}

        {openCode ? <CodeButtons /> : <FormButtons nextText={nextText} type={type} />}
      </form>
    </div>
  )
}
