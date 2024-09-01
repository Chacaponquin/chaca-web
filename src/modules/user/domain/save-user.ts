import { NotEqualUserPasswords } from "../errors"
import { Email, Password, Username } from "../value-object"

type SaveUserProps = {
  username: string
  confirmPassword: string
  password: string
  email: string
}

export class SaveUser {
  private _username: string
  private _confirmPassword: string
  private _password: string
  private _email: string

  constructor({ confirmPassword, email, password, username }: SaveUserProps) {
    this._username = new Username(username).value()
    this._password = new Password(password).value()
    this._email = new Email(email).value()
    this._confirmPassword = confirmPassword

    this.validatePasswords()
  }

  private validatePasswords() {
    if (this._confirmPassword !== this._confirmPassword) {
      throw new NotEqualUserPasswords()
    }
  }

  get username() {
    return this._username
  }

  get password() {
    return this._password
  }

  get email() {
    return this._email
  }
}
