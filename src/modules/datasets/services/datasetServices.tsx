import { DatasetsContext } from "../context"
import { useContext } from "react"
import { DATASETS_ACTIONS } from "../constants"
import { DATA_TYPES } from "@modules/schemas/constants"
import { AppConfigContext } from "@modules/shared/modules/appConfig/context"
import { FieldInfoDTO } from "../dto/fieldInfo.dto"
import { schemasServices } from "@modules/schemas/services"
import { DatasetField, SingleValueDataType } from "../interfaces/datasets.interface"
import { DatasetTree } from "@modules/shared/classes"
import { useValidations } from "../hooks"

export function datasetServices() {
  const {
    datasetDispatch,
    handleDeleteSelectField,
    selectedDataset,
    datasets,
    handleSelectDataset,
  } = useContext(DatasetsContext)
  const { schemas } = useContext(AppConfigContext)
  const { findParent } = schemasServices()
  const { validateDatasetName, validateFieldName } = useValidations()

  const initDatasets = () => {
    const initDataset = new DatasetTree("New Dataset", 50)

    return [initDataset]
  }

  const addDataset = (datasetName: string) => {
    console.log(datasetName)
    validateDatasetName(datasetName)
    // create dataset
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
      payload: { datasetName },
    })
  }

  const editDataset = (datasetName: string) => {
    validateDatasetName(datasetName)

    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_NAME,
      payload: { datasetID: selectedDataset.id, newName: datasetName },
    })
  }

  const updateField = (fieldDTO: FieldInfoDTO, parentFieldID: string) => {
    validateFieldName(parentFieldID, fieldDTO.name)

    datasetDispatch({
      type: DATASETS_ACTIONS.EDIT_FIELD,
      payload: {
        field: fieldDTO,
        datasetID: selectedDataset.id,
      },
    })
  }

  const addField = (fieldDTO: FieldInfoDTO, parentFieldID: string) => {
    validateFieldName(parentFieldID, fieldDTO.name)

    // crear el field
    datasetDispatch({
      type: DATASETS_ACTIONS.ADD_NEW_FIELD,
      payload: {
        fieldInfo: {
          name: fieldDTO.name,
          isArray: fieldDTO.isArray,
          isPosibleNull: fieldDTO.isPosibleNull,
          dataType: {
            type: DATA_TYPES.SINGLE_VALUE,
            fieldType: { args: {}, parent: schemas[0].parent, type: schemas[0].options[0].name },
          },
        },
        parentFieldID,
        datasetID: selectedDataset.id,
      },
    })

    // quitar el selected field (ponerlo en null)
    handleDeleteSelectField()
  }

  const deleteDataset = (datasetID: string) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_DATASET,
      payload: { datasetID },
    })

    handleSelectDataset(datasets[0].id)
  }

  const selectFieldSchema = (parent: string, fieldID: string) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: fieldID,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            parent: parent,
            type: findParent(parent).options[0].name,
          },
        },
      },
    })
  }

  const selectFieldSchemaOption = (
    field: DatasetField<SingleValueDataType>,
    optionName: string,
  ) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            parent: field.dataType.fieldType.parent,
            type: optionName,
          },
        },
      },
    })
  }

  const updateFieldSchemaArgumetns = (
    field: DatasetField<SingleValueDataType>,
    argumentName: string,
    value: unknown,
  ) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            ...field.dataType.fieldType,
            args: { ...field.dataType.fieldType.args, [argumentName]: value },
          },
        },
      },
    })
  }

  const updateRefField = (
    selectFieldID: string,
    currentLocation: Array<string>,
    currentFieldID: string,
  ) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: selectFieldID,
        dataType: {
          type: DATA_TYPES.REF,
          ref: [...currentLocation, currentFieldID],
        },
      },
    })
  }

  const updateCustomField = (fieldID: string, code: string) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: fieldID,
        dataType: {
          type: DATA_TYPES.CUSTOM,
          code: code,
        },
      },
    })
  }

  const changeDocumentsLimit = (limit: number) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
      payload: {
        datasetID: selectedDataset.id,
        newLimit: limit,
      },
    })
  }

  const changeFieldDataType = (fieldID: string, dataType: DATA_TYPES) => {
    if (dataType === DATA_TYPES.SINGLE_VALUE) {
      datasetDispatch({
        type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
        payload: {
          datasetID: selectedDataset.id,
          fieldID: fieldID,
          dataType: {
            type: dataType,
            fieldType: {
              parent: schemas[0].parent,
              type: schemas[0].options[0].name,
              args: {},
            },
          },
        },
      })
    } else if (dataType === DATA_TYPES.REF) {
      datasetDispatch({
        type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
        payload: {
          datasetID: selectedDataset.id,
          fieldID: fieldID,
          dataType: { type: dataType, ref: [] },
        },
      })
    } else if (dataType === DATA_TYPES.CUSTOM) {
      datasetDispatch({
        type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
        payload: {
          datasetID: selectedDataset.id,
          fieldID: fieldID,
          dataType: {
            type: dataType,
            code: "function getValue(fields, utils){\n\t// logic of your function\n}",
          },
        },
      })
    }
  }

  return {
    addDataset,
    addField,
    deleteDataset,
    updateField,
    selectFieldSchema,
    selectFieldSchemaOption,
    updateFieldSchemaArgumetns,
    updateRefField,
    changeFieldDataType,
    updateCustomField,
    changeDocumentsLimit,
    initDatasets,
    editDataset,
  }
}
