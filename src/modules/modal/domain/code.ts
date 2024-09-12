import { Languages } from "@modules/shared/modules/markdown/domain"

export interface ModalCodeProps {
  handleChange(v: string): void
  code: string
  language: Languages
}
