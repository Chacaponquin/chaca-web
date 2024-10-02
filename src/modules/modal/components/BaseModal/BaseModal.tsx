import { useModal } from "@modules/modal/hooks"
import clsx from "clsx"

interface Props {
  name: string
  children: React.ReactNode
}

export default function BaseModal({ name, children }: Props) {
  const { handleCloseModal } = useModal()

  const CLASS = clsx(
    "flex justify-center items-center",
    "w-full min-h-screen",
    "px-3 py-4",
    "absolute top-0 left-0",
    "z-50",
    "bg-scale-5/50",
  )

  const FORM_CLASS = clsx(
    "flex flex-col",
    "w-full max-w-[650px] h-max max-h-[600px]",
    "bg-white dark:bg-scale-3",
    "px-8 py-5 esm:px-8",
    "text-black dark:text-scale-11",
    "shadow-lg",
    "rounded-md",
    "animate-fade-down animate-once animate-duration-500 animate-ease-in-out",
    "dark:border-scale-7 border-[1px]",
    "overflow-y-auto",
  )

  return (
    <div onClick={handleCloseModal} id={`${name}-modal`} className={CLASS}>
      <dialog className={FORM_CLASS} onClick={(e) => e.stopPropagation()}>
        {children}
      </dialog>
    </div>
  )
}
