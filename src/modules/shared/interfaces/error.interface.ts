export interface ChacaHttpError {
  status: number
  message: string
}

export interface RespHttpError {
  error: { status: number; message: string }
  time: string
  path: number
}
