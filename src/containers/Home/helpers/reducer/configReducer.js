import { CONFIG_ACTIONS } from "./ActionTypes";

export const configReducer = (config, action) => {
  switch (action.type) {
    case CONFIG_ACTIONS.CHANGE_FILE_TYPE: {
      return { ...config, file: action.payload.value };
    }
    case CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA: {
      return { ...config, saveSchema: action.payload.value };
    }
    case CONFIG_ACTIONS.SET_INITIAL_CONFIG: {
      return action.payload.value;
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
