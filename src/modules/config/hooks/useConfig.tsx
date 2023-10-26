import { useContext } from "react"
import { CONFIG_ACTIONS } from "../constants"
import { ConfigContext } from "../context"

export function useConfig() {
  const { fileConfig, config, configDispatch } = useContext(ConfigContext)

  function handleResetConfig() {
    configDispatch({
      type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
      payload: { fileConfig },
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
    const found = fileConfig.find((f) => f.id === fileId)

    if (found) {
      configDispatch({
        type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
        payload: {
          file: found.fileType,
        },
      })
    }
  }

  return {
    handleChangeSaveSchema,
    handleResetConfig,
    handleChangeFileType,
    config,
    fileConfig,
  }
}
