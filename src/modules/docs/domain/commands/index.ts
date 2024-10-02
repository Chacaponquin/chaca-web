import { KeyboardCommand } from "@modules/app/domain/command"

export class OpenSearckCommand extends KeyboardCommand {
  static commandId = "open-doc-search"

  constructor(func: () => void) {
    super({ click: func, command: OpenSearckCommand.commandId })
  }

  action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.key === "k"
  }
}
