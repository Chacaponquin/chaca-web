import { Languages } from "@modules/shared/modules/markdown/interfaces"

export interface ModalCodeProps {
  handleChange(v: string): void
  code: string
  language: Languages
}
