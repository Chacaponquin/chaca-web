import { X } from "../../../../../../shared/assets/icons"

const ModalTitle = ({
  titleText,
  handleCloseModal,
}: {
  handleCloseModal: () => void
  titleText: string
}) => {
  return (
    <div className='flex w-full justify-between mb-3 items-center'>
      <h1 className='font-fontExtraBold text-2xl'>{titleText}</h1>
      <button onClick={handleCloseModal}>
        <X size={20} />
      </button>
    </div>
  )
}

export default ModalTitle
