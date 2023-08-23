import { DatasetsContext } from "../context"
import { useContext } from "react"
import { DATASETS_ACTIONS } from "../constants"
import { FieldForm } from "../dto/field"
import { DatasetTree } from "@modules/datasets/domain/tree"
import { useValidations } from "../hooks"
import { DATA_TYPES } from "@modules/schemas/constants"

export default function useDatasetServices() {
  const {
    datasetDispatch,
    handleDeleteSelectField,
    selectedDataset,
    datasets,
    handleSelectDataset,
  } = useContext(DatasetsContext)

  const { validateDatasetName, validateFieldName } = useValidations()

  const initDatasets = () => {
    const initDataset = new DatasetTree("New Dataset", 50)
    return [initDataset]
  }

  const addDataset = (datasetName: string) => {
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

  const updateField = (fieldDTO: FieldForm, parentFieldID: string) => {
    validateFieldName(parentFieldID, fieldDTO.name)

    datasetDispatch({
      type: DATASETS_ACTIONS.EDIT_FIELD,
      payload: {
        field: fieldDTO,
        datasetID: selectedDataset.id,
      },
    })
  }

  const addField = (field: FieldForm, parentFieldID: string) => {
    validateFieldName(parentFieldID, field.name)

    // crear el field
    datasetDispatch({
      type: DATASETS_ACTIONS.ADD_NEW_FIELD,
      payload: {
        fieldInfo: {
          name: field.name,
          isArray: field.isArray,
          isPosibleNull: field.isPosibleNull,
          dataType: field.dataType,
          isKey: field.isKey,
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

  function changeDocumentsLimit(limit: number) {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
      payload: {
        datasetID: selectedDataset.id,
        newLimit: limit,
      },
    })
  }

  function fieldCanBeKey(field: FieldForm): boolean {
    const type = field.dataType.type
    return type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.MIXED && type !== DATA_TYPES.ENUM
  }

  function fieldCanBeArray(field: FieldForm): boolean {
    const type = field.dataType.type
    return type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !field.isKey
  }

  function fieldCanBeNull(field: FieldForm): boolean {
    const type = field.dataType.type
    return type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !field.isKey
  }

  return {
    addDataset,
    addField,
    deleteDataset,
    updateField,
    changeDocumentsLimit,
    initDatasets,
    editDataset,
    fieldCanBeKey,
    fieldCanBeNull,
    fieldCanBeArray,
  }
}
