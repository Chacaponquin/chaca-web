import { useDocs } from "@modules/docs/hooks"
import { useModal } from "@modules/modal/hooks"
import { useState } from "react"
import { SearchDocModalProps } from "../domain/modal"
import { CommandsExecutor } from "@modules/app/domain/command"
import { useCommands } from "@modules/app/hooks"
import { OpenSearckCommand } from "@modules/docs/domain/commands"

export default function useLayout() {
  const { selected } = useDocs()
  const { handleOpenModal } = useModal()

  const [openAside, setOpenAside] = useState(false)

  const commands = new CommandsExecutor([new OpenSearckCommand(handleOpenSearch)])

  useCommands({ executor: commands })

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
