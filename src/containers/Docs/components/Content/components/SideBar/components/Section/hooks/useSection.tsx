import { SelectedDoc } from "@containers/Docs/interfaces"
import { useEffect, useMemo, useState } from "react"

interface Props {
  selectedDoc: SelectedDoc | null
  id: string
}

export default function useSection({ id, selectedDoc }: Props) {
  const [open, setOpen] = useState(false)

  const selected = useMemo(
    () => (selectedDoc ? selectedDoc.sectionsId.includes(id) : false),
    [selectedDoc, id],
  )

  useEffect(() => {
    setOpen(selected)
  }, [selected])

  function handleChangeOpen() {
    setOpen((prev) => !prev)
  }

  return { open, handleChangeOpen, selected }
}
