import { ConfigSchema, FileConfigOption } from "../../../shared/interfaces/config.iterface"
import { CONFIG_ACTIONS } from "../constants/ACTION_TYPES"
import { Reducer } from "react"
import { FILE_TYPE } from "../../../shared/constant/FILE_TYPE"

export type ConfigPayload =
  | {
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE
      payload: {
        value: FILE_TYPE
      }
    }
  | {
      type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA
      payload: { value: boolean }
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

export const configReducer: Reducer<ConfigSchema, ConfigPayload> = (
  config: ConfigSchema,
  action: ConfigPayload,
): ConfigSchema => {
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
        file: {
          fileType: action.payload.fileConfig[0].fileType,
          arguments: {},
        },
        saveSchema: false,
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
    default:
      return config
  }
}
