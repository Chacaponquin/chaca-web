import { IsArrayConfig, IsKeyConfig } from "./field_config.interface"

export interface NodeProps<T> {
  name: string
  dataType: T
  isPosibleNull?: number
  isArray?: IsArrayConfig
  isKey?: IsKeyConfig
}
