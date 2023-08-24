import { Dimension } from "./dimension.interface"

export interface ChacaFormProps<T> {
  className?: string
  onChange?: (value: T) => void
  dimension?: Dimension
  value: T
  id?: string
}
