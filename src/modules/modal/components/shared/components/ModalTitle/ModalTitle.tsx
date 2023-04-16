import { ModalContext } from "@modules/modal/context"
import { X } from "@modules/shared/assets/icons"
import { useContext } from "react"

const ModalTitle = ({ titleText }: { titleText: string }) => {
  const { handleCloseModal } = useContext(ModalContext)

  return (
    <div className='flex w-full justify-between mb-3 items-center'>
      <h1 className='font-fontTitle text-2xl'>{titleText}</h1>
      <button onClick={handleCloseModal}>
        <X size={20} />
      </button>
    </div>
  )
}

export default ModalTitle
