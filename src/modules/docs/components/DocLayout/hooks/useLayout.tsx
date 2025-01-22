import { useDocs } from "@modules/docs/hooks"
import { useModal } from "@modules/modal/hooks"
import { useState } from "react"
import { SearchDocModalProps } from "../domain/modal"
import { CommandsExecutor } from "@modules/app/domain/command"
import { OpenSearckCommand } from "@modules/docs/domain/commands"
import useCommands from "@modules/app/hooks/useCommands"

export default function useLayout() {
  const { selected } = useDocs()
  const { handleOpenModal, openModal } = useModal()

  const [openAside, setOpenAside] = useState(false)

  const commands = new CommandsExecutor([new OpenSearckCommand(handleOpenSearch)])

  useCommands({ executor: commands, condition: openModal === null })

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
