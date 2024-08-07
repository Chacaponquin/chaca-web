import { ModalProps } from "@modules/modal/domain"
import { createContext, useState } from "react"
import { CodeProvider } from "./CodeContext"

interface Props {
  openModal: null | ModalProps
  handleOpenModal(props: ModalProps): void
  handleCloseModal(): void
}

export const ModalContext = createContext<Props>({ openModal: null } as Props)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState<ModalProps | null>(null)

  function handleOpenModal(props: ModalProps) {
    setOpenModal(props)
  }

  function handleCloseModal() {
    setOpenModal(null)
  }

  const data = { openModal, handleCloseModal, handleOpenModal }

  return (
    <ModalContext.Provider value={data}>
      <CodeProvider>{children}</CodeProvider>
    </ModalContext.Provider>
  )
}
