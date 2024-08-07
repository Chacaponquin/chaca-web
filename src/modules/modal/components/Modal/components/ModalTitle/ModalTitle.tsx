import { ModalContext } from "@modules/modal/context"
import { X } from "@modules/app/modules/icon/components"
import { useContext } from "react"

interface Props {
  title: string
}

export default function ModalTitle({ title }: Props) {
  const { handleCloseModal } = useContext(ModalContext)

  return (
    <section className="flex w-full justify-between mb-3 items-center">
      <h1 className="font-fontMedium text-2xl dark:text-white">{title}</h1>

      <button type="button" onClick={handleCloseModal} className="fill-black dark:fill-white">
        <X size={20} />
      </button>
    </section>
  )
}
