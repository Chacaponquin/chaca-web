import { CONFIG_ACTIONS } from "./ActionTypes";

export const configReducer = (config, action) => {
  switch (action.type) {
    case CONFIG_ACTIONS.CHANGE_FILE_TYPE: {
      return { ...config, fileType: action.payload.value };
    }
    case CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA: {
      return { ...config, saveSchema: action.payload.value };
    }
    default:
      return config;
  }
};
