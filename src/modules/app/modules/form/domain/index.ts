export type Size = "sm" | "base" | "lg" | "xl" | "xs"

export interface ChacaFormProps<T> {
  onChange(value: T): void
  size: Size
  value: T
  id?: string
}
