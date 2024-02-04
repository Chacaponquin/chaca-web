import { useState } from "react"

export default function useSection() {
  const [open, setOpen] = useState(false)

  function handleChangeOpen() {
    setOpen((prev) => !prev)
  }

  return { open, handleChangeOpen }
}
