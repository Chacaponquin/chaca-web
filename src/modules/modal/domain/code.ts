import { Languages } from "@markdown/domain"

export interface ModalCodeProps {
  handleChange(v: string): void
  code: string
  language: Languages
}
