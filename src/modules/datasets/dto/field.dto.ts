export interface FieldInfoDTO {
  id: string
  name: string
  isPosibleNull: number
  isArray: {
    min: number
    max: number
  } | null
}
