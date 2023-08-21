export interface ChacaHttpError {
  status: number
  message: string
}

export interface RespHttpError {
  error: ChacaHttpError
  time: string
  path: number
}
