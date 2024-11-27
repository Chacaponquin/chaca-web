import { Email, Message, Title } from "../value-object"

type SaveUserMessageProps = {
  title: string
  email: string
  message: string
}

export class SaveUserMessage {
  private _title: string
  private _email: string
  private _message: string

  constructor({ email, message, title }: SaveUserMessageProps) {
    this._title = new Title(title).value()
    this._email = new Email(email).value()
    this._message = new Message(message).value()
  }

  get title() {
    return this._title
  }

  get email() {
    return this._email
  }

  get message() {
    return this._message
  }
}
