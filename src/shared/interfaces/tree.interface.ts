export interface NodeInfo<T> {
  name: string
  dataType: T
  isPosibleNull: number
  isArray: {
    min: number
    max: number
  } | null
}
