import { useContext } from "react"
import { CONFIG_ACTIONS, FILE_TYPE } from "../constants"
import { ConfigContext } from "../context"

export function useConfig() {
  const { fileConfig, config, configDispatch } = useContext(ConfigContext)

  function resetConfig() {
    configDispatch({
      type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
      payload: { fileConfig },
    })
  }

  function changeSaveSchema(value: boolean) {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
      payload: {
        value: value
          ? {
              description: "",
              name: "",
              tags: [],
            }
          : null,
      },
    })
  }

  function changeFileType(fileType: FILE_TYPE) {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
      payload: {
        value: fileType,
      },
    })
  }

  return {
    changeSaveSchema,
    resetConfig,
    changeFileType,
    config,
    fileConfig,
  }
}
