/*eslint-disable */

import { ModalProps } from "@modules/modal/interfaces/modal.interface"
import { createContext, ReactElement, useState } from "react"

const ModalContext = createContext<{
  openModal: null | ModalProps
  handleOpenModal: (props: ModalProps) => void
  handleCloseModal: () => void
}>({ openModal: null, handleCloseModal: () => {}, handleOpenModal: () => {} })

const ModalProvider = ({ children = <></> }: { children: ReactElement }) => {
  const [openModal, setOpenModal] = useState<null | ModalProps>(null)

  const handleOpenModal = (props: ModalProps) => {
    setOpenModal(props)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const data = { openModal, handleCloseModal, handleOpenModal }

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
}

export { ModalProvider, ModalContext }
