import { useContext } from "react"
import { CodeContext } from "../context"

export default function useCode() {
  const { handleClose, handleOpen, openCode, code, handleChange } = useContext(CodeContext)

  function handleSubmit() {
    if (openCode) {
      openCode.handleChange(code)
      handleClose()
    }
  }

  return { handleClose, handleOpen, openCode, code, handleChange, handleSubmit }
}
