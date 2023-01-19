import { DatasetsContext } from "@modules/datasets/context"
import { AppConfigContext } from "@modules/shared/context"
import { useContext } from "react"
import { CONFIG_ACTIONS, FILE_TYPE } from "../constants"
import { EmptyFormFieldError } from "../errors"
import { SaveSchemaForm } from "../interfaces/config.iterface"

export function configServices() {
  const { configDispatch, config } = useContext(DatasetsContext)
  const { fileConfig } = useContext(AppConfigContext)

  const resetConfig = () => {
    configDispatch({
      type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
      payload: { fileConfig },
    })
  }

  const validateSchemaForm = () => {
    if (config.saveSchema) {
      for (const [key, value] of Object.entries(config.saveSchema)) {
        if (value === "") {
          throw new EmptyFormFieldError(key as keyof SaveSchemaForm)
        }
      }
    }
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
        if (value === "") {
          throw new EmptyFormFieldError(key)
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
    validateSchemaForm,
    changeFileArgument,
    changeFileType,
  }
}
