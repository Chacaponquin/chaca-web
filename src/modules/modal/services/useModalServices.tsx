import { useContext } from "react"
import { ModalContext } from "../context"

export default function useModalServices() {
  const { handleCloseModal, handleOpenModal, openModal } = useContext(ModalContext)

  return { openModal, handleCloseModal, handleOpenModal }
}
