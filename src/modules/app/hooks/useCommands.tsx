import { useEffect } from "react"
import { CommandsExecutor } from "../domain/command"

interface Props {
  executor: CommandsExecutor
  condition?: boolean
}

export default function useCommands({ executor, condition = true }: Props) {
  const handleKeyboardAction = (event: globalThis.KeyboardEvent) => {
    if (condition) {
      executor.execute(event)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardAction)

    return () => {
      document.removeEventListener("keydown", handleKeyboardAction)
    }
  }, [handleKeyboardAction])

  return {}
}
