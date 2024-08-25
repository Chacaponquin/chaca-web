export type Size = "sm" | "base" | "lg" | "xl"

export interface ChacaFormProps<T> {
  onChange(value: T): void
  size: Size
  value: T
  id?: string
}
