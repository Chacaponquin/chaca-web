import { createContext, useState } from "react"
import { ModalCodeProps } from "../domain/code"

interface Props {
  openCode: ModalCodeProps | null
  handleClose(): void
  handleOpen(props: ModalCodeProps): void
  handleChange(c: string): void
  code: string
}

export const CodeContext = createContext<Props>({ openCode: null } as Props)

export function CodeProvider({ children }: { children: React.ReactNode }) {
  const [openCode, setOpenCode] = useState<ModalCodeProps | null>(null)
  const [code, setCode] = useState("")

  function handleClose() {
    setOpenCode(null)
    setCode("")
  }

  function handleOpen({ code: c, handleChange, language }: ModalCodeProps) {
    setOpenCode({ code: c, language, handleChange })
    setCode(c)
  }

  function handleChange(c: string) {
    setCode(c)
  }

  const value = { openCode, handleClose, handleOpen, handleChange, code }

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>
}
