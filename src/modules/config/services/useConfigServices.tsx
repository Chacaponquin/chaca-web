import { useContext } from "react"
import { CONFIG_ACTIONS, FILE_TYPE } from "../constants"
import { RepeatTagError } from "../errors"
import { SaveSchemaForm } from "../interfaces/config.iterface"
import { ConfigContext } from "../context"

export function useConfigServices() {
  const { fileConfig, config, configDispatch } = useContext(ConfigContext)

  function resetConfig() {
    configDispatch({
      type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
      payload: { fileConfig },
    })
  }

  const changeFileArgument = (argName: string, value: unknown) => {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS,
      payload: { field: argName, value },
    })
  }

  const changeSaveSchema = (value: boolean) => {
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

  const updateSaveSchemaForm = (key: keyof SaveSchemaForm, value: string) => {
    if (config.saveSchema) {
      if (key === "name") {
        configDispatch({
          type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
          payload: { value: { ...config.saveSchema, name: value } },
        })
      } else if (key === "description") {
        configDispatch({
          type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
          payload: { value: { ...config.saveSchema, description: value } },
        })
      } else {
        if (config.saveSchema.tags.some((t) => t === value)) {
          throw new RepeatTagError(value)
        }

        configDispatch({
          type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
          payload: { value: { ...config.saveSchema, tags: [...config.saveSchema.tags, value] } },
        })
      }
    }
  }

  const changeFileType = (fileType: FILE_TYPE) => {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
      payload: {
        value: fileType,
      },
    })
  }

  return {
    changeSaveSchema,
    updateSaveSchemaForm,
    resetConfig,
    changeFileArgument,
    changeFileType,
    config,
    fileConfig,
  }
}
