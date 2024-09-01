interface Props {
  click(): void
  command: string
}

export abstract class KeyboardCommand {
  constructor(private readonly props: Props) {}

  protected abstract action(event: globalThis.KeyboardEvent): boolean

  get command() {
    return this.props.command
  }

  execute(event: globalThis.KeyboardEvent): void {
    if (this.action(event)) {
      event.preventDefault()
      this.props.click()
    }
  }
}

export class EditDatasetCommand extends KeyboardCommand {
  static value = "Q"

  constructor(click: () => void) {
    super({ click, command: EditDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.key === "q" && !event.ctrlKey
  }
}

export class ExportDatasetCommand extends KeyboardCommand {
  static value = "E"

  constructor(click: () => void) {
    super({ click, command: ExportDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.key === "e" && !event.ctrlKey
  }
}

export class CloneDatasetCommand extends KeyboardCommand {
  static value = "Ctrl+D"

  constructor(click: () => void) {
    super({ click, command: CloneDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.key === "d"
  }
}

export class DeleteDatasetCommand extends KeyboardCommand {
  static value = "Delete"

  constructor(click: () => void) {
    super({ click, command: DeleteDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.key === "Delete"
  }
}

export class ExportAllDatasetsCommand extends KeyboardCommand {
  static value = "Ctrl+Alt+E"

  constructor(click: () => void) {
    super({ click, command: ExportAllDatasetsCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.altKey && event.key === "e"
  }
}

export class handleExportDatasetsImageCommand extends KeyboardCommand {
  static value = "Ctrl+Alt+I"

  constructor(click: () => void) {
    super({ click, command: handleExportDatasetsImageCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.altKey && event.key === "i"
  }
}

export class AddDatasetCommand extends KeyboardCommand {
  static value = "Ctrl+Alt+A"

  constructor(click: () => void) {
    super({ click, command: AddDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.altKey && event.key === "a"
  }
}

export class AddFieldCommand extends KeyboardCommand {
  static value = "A"

  constructor(click: () => void) {
    super({ click, command: AddFieldCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.key === "a" && !event.ctrlKey
  }
}

export class CommandsExecutor {
  constructor(private readonly array: KeyboardCommand[]) {}

  execute(event: globalThis.KeyboardEvent): void {
    for (const command of this.array) {
      command.execute(event)
    }
  }
}
