import { useDocs } from "@modules/docs/hooks"
import { useState } from "react"

export default function useLayout() {
  const { selected } = useDocs()

  const [openAside, setOpenAside] = useState(false)

  function handleChangeOpenAside() {
    setOpenAside((prev) => !prev)
  }

  function handleOpenSearch() {
    // TODO: Open search
  }

  return {
    handleChangeOpenAside,
    openAside,
    handleOpenSearch,
    selected,
  }
}
