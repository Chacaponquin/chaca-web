import { useState } from "react"

export default function useFieldContainer() {
  const [subFieldsOpen, setSubFieldsOpen] = useState(true)

  const handleInteractSubFields = () => {
    setSubFieldsOpen((prev) => !prev)
  }

  return {
    subFieldsOpen,
    handleInteractSubFields,
  }
}
