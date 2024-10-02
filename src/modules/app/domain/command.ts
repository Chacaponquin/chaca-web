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

export class CommandsExecutor {
  constructor(private readonly array: KeyboardCommand[]) {}

  execute(event: globalThis.KeyboardEvent): void {
    for (const command of this.array) {
      command.execute(event)
    }
  }
}
