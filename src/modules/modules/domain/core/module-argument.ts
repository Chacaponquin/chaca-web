import { ARGUMENT_TYPE } from "../constants"

export interface Argument {
  id: string
  argument: string
  config: ArgumentConfig
  showName: string
}

export type ArgumentConfig =
  | ArgmentSelectConfig
  | ArgumentBooleanConfig
  | ArgumentDateConfig
  | ArgumentFloatConfig
  | ArgumentNumberConfig
  | ArgumentTextConfig

export type ArgmentSelectConfig = {
  type: ARGUMENT_TYPE.SELECT
  values: string[]
}

export type ArgumentBooleanConfig = {
  type: ARGUMENT_TYPE.BOOLEAN
}

export type ArgumentDateConfig = {
  type: ARGUMENT_TYPE.DATE
}

export type ArgumentFloatConfig = {
  type: ARGUMENT_TYPE.FLOAT
}

export type ArgumentNumberConfig = {
  type: ARGUMENT_TYPE.NUMBER
}

export type ArgumentTextConfig = {
  type: ARGUMENT_TYPE.TEXT
}

export type ArgumentsObject = Record<string, unknown>
