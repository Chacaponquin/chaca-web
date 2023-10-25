import { Config, FileConfigOption, SaveSchemaValue } from "../interfaces/config.iterface"
import { Reducer } from "react"
import { FILE_TYPE, CONFIG_ACTIONS } from "../constants"

export type ConfigPayload =
  | {
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE
      payload: {
        value: FILE_TYPE
      }
    }
  | {
      type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA
      payload: { value: SaveSchemaValue }
    }
  | {
      type: CONFIG_ACTIONS.SET_INITIAL_CONFIG
      payload: { fileConfig: FileConfigOption[] }
    }
  | {
      type: CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS
      payload: {
        field: string
        value: unknown
      }
    }

export const configReducer: Reducer<Config, ConfigPayload> = (
  config: Config,
  action: ConfigPayload,
): Config => {
  switch (action.type) {
    case CONFIG_ACTIONS.CHANGE_FILE_TYPE: {
      return {
        ...config,
        file: {
          fileType: action.payload.value,
          arguments: {},
        },
      }
    }

    case CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA: {
      return { ...config, saveSchema: action.payload.value }
    }

    case CONFIG_ACTIONS.SET_INITIAL_CONFIG: {
      return {
        file: { fileType: FILE_TYPE.JSON, arguments: {} },
        saveSchema: null,
      }
    }

    case CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS: {
      const { file } = config

      file.arguments = {
        ...file.arguments,
        [action.payload.field]: action.payload.value,
      }

      return { ...config, file }
    }

    default: {
      return config
    }
  }
}
