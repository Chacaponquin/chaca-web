import { IsArrayConfig } from "./field_config.interface"

export interface NodeInfo<T> {
  name: string
  dataType: T
  isPosibleNull: number
  isArray: IsArrayConfig
}
