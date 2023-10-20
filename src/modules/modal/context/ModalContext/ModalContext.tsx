import { ModalProps } from "@modules/modal/interfaces/modal.interface"
import { AppContext } from "@modules/app/context"
import { createContext, ReactElement, useState, useContext } from "react"
import { Modal } from "@modules/modal/components"

interface ModalContextProps {
  openModal: null | ModalProps
  handleOpenModal: (props: ModalProps) => void
  handleCloseModal: () => void
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

const ModalProvider = ({ children }: { children: ReactElement }) => {
  const { handleOpenDropDown } = useContext(AppContext)

  const [openModal, setOpenModal] = useState<null | ModalProps>(null)

  const handleOpenModal = (props: ModalProps) => {
    setOpenModal(props)
    handleOpenDropDown("")
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const data = { openModal, handleCloseModal, handleOpenModal }

  return (
    <ModalContext.Provider value={data}>
      {openModal && <Modal modalProps={openModal} />}
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }
