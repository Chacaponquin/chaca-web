export interface TransformDTO {
  dataset: unknown
  filename: string
  format: string
}

export interface TransformResult {
  code: string
  file: string
}
