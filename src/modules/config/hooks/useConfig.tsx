import { useContext } from "react"
import { CONFIG_ACTIONS } from "../constants"
import { ConfigContext } from "../context"

export default function useConfig() {
  const { fileOptions, config, configDispatch } = useContext(ConfigContext)

  function handleResetConfig() {
    configDispatch({
      type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
      payload: { options: fileOptions },
    })
  }

  function handleChangeSaveSchema(value: boolean) {
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

  function handleChangeFileType(fileId: string) {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
      payload: {
        file: fileId,
      },
    })
  }

  return {
    handleChangeSaveSchema,
    handleResetConfig,
    handleChangeFileType,
    config,
    fileOptions,
  }
}
