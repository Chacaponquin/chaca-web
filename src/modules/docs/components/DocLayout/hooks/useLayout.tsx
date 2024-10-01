import { useDocs } from "@modules/docs/hooks"
import { useModal } from "@modules/modal/hooks"
import { useState } from "react"
import { SearchDocModalProps } from "../domain/modal"

export default function useLayout() {
  const { selected } = useDocs()
  const { handleOpenModal } = useModal()

  const [openAside, setOpenAside] = useState(false)

  function handleChangeOpenAside() {
    setOpenAside((prev) => !prev)
  }

  function handleOpenSearch() {
    handleOpenModal(new SearchDocModalProps())
    setOpenAside(false)
  }

  return {
    handleChangeOpenAside,
    openAside,
    handleOpenSearch,
    selected,
  }
}
