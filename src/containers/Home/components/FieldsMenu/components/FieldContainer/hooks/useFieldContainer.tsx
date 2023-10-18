import { useState } from "react"

export function useFieldContainer() {
  const [subFieldsOpen, setSubFieldsOpen] = useState(true)

  const handleInteractSubFields = () => {
    setSubFieldsOpen(!subFieldsOpen)
  }

  return {
    subFieldsOpen,
    handleInteractSubFields,
  }
}
