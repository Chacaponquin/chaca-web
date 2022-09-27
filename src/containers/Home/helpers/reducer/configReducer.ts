import { ConfigSchema } from "../../../../shared/interfaces/config.iterface";
import { CONFIG_ACTIONS } from "./ACTION_TYPES";
import { Reducer } from "react";
import { FILE_TYPE } from "../../../../shared/constant/FILE_TYPE";
import { FieldArgument } from "../../../../shared/interfaces/datasets.interface";

export type ConfigPayload =
  | {
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE;
      payload: {
        value: FILE_TYPE;
      };
    }
  | {
      type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA;
      payload: { value: boolean };
    }
  | { type: CONFIG_ACTIONS.SET_INITIAL_CONFIG; payload: ConfigSchema }
  | {
      type: CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS;
      payload: {
        field: string;
        value: FieldArgument;
      };
    };

export const configReducer: Reducer<ConfigSchema, ConfigPayload> = (
  config: ConfigSchema,
  action: ConfigPayload
): ConfigSchema => {
  switch (action.type) {
    case CONFIG_ACTIONS.CHANGE_FILE_TYPE: {
      return {
        ...config,
        file: {
          fileType: action.payload.value,
          arguments: {},
        },
      };
    }
    case CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA: {
      return { ...config, saveSchema: action.payload.value };
    }
    case CONFIG_ACTIONS.SET_INITIAL_CONFIG: {
      return action.payload;
    }
    case CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS: {
      const { file } = config;

      file.arguments = {
        ...file.arguments,
        [action.payload.field]: action.payload.value,
      };

      return { ...config, file };
    }
    default:
      return config;
  }
};
