import { ModalContext } from "@modules/modal/context"
import { X } from "@modules/app/modules/icon/components"
import { useContext } from "react"

export default function ModalTitle({ titleText }: { titleText: string }) {
  const { handleCloseModal } = useContext(ModalContext)

  return (
    <section className="flex w-full justify-between mb-3 items-center">
      <h1 className="font-fontMedium text-2xl dark:text-white">{titleText}</h1>

      <button onClick={handleCloseModal} className="fill-black dark:fill-white">
        <X size={20} />
      </button>
    </section>
  )
}
