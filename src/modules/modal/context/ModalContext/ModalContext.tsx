/*eslint-disable */

import { ModalProps } from "@modules/modal/interfaces/modal.interface"
import { AppConfigContext } from "@modules/shared/modules/appConfig/context"
import { createContext, ReactElement, useState, useContext } from "react"

const ModalContext = createContext<{
  openModal: null | ModalProps
  handleOpenModal: (props: ModalProps) => void
  handleCloseModal: () => void
}>({ openModal: null, handleCloseModal: () => {}, handleOpenModal: () => {} })

const ModalProvider = ({ children = <></> }: { children: ReactElement }) => {
  const { handleOpenDropDown } = useContext(AppConfigContext)

  const [openModal, setOpenModal] = useState<null | ModalProps>(null)

  const handleOpenModal = (props: ModalProps) => {
    setOpenModal(props)
    handleOpenDropDown("")
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const data = { openModal, handleCloseModal, handleOpenModal }

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
}

export { ModalProvider, ModalContext }
