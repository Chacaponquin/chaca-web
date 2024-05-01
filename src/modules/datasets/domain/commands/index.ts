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
    return event.key === "q"
  }
}

export class ExportDatasetCommand extends KeyboardCommand {
  static value = "E"

  constructor(click: () => void) {
    super({ click, command: ExportDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.key === "e"
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
  static value = "Ctrl+E"

  constructor(click: () => void) {
    super({ click, command: ExportAllDatasetsCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.key === "e"
  }
}

export class ExportDatasetsImageCommand extends KeyboardCommand {
  static value = "Ctrl+I"

  constructor(click: () => void) {
    super({ click, command: ExportDatasetsImageCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey && event.key === "i"
  }
}

export class AddDatasetCommand extends KeyboardCommand {
  static value = "Ctrl+A"

  constructor(click: () => void) {
    super({ click, command: AddDatasetCommand.value })
  }

  protected action(event: globalThis.KeyboardEvent): boolean {
    return event.ctrlKey + event.key === "a"
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
