import { DatasetsContext } from "../context"
import { useCallback, useContext } from "react"
import { DATASETS_ACTIONS } from "../constants"
import { ExportDatatypeDTO, FieldProps } from "../dto/field"
import { Dataset, Field } from "@modules/datasets/domain/tree"
import { usePlayground } from "."
import { PossibleFieldToRef } from "../interfaces/ref"
import { FieldDataType } from "../interfaces/dataset-field"
import {
  DatasetNameValidator,
  EnumValuesValidator,
  FieldNameValidator,
  NoDuplicateDataset,
  NoDuplicateLevelField,
  PickValuesValidator,
  ProbabilityValuesValidator,
  SequentialValuesValidator,
  Validator,
} from "../domain/validators"
import { DatasetError } from "../errors"

interface AddFieldProps {
  field: FieldProps
  parentfieldId: string
  datasetId: string
  success(): void
  error(error: DatasetError): void
}

interface UpdateFieldProps {
  field: FieldProps
  parentfieldId: string
  datasetId: string
  success(): void
  error(error: DatasetError): void
}

interface EditDatasetProps {
  name: string
  datasetId: string
  limit: number
  success(): void
  error(error: DatasetError): void
}

interface DeleteFieldProps {
  datasetId: string
  fieldId: string
}

interface SearchRefFieldsProps {
  datasetId: string
  fieldId: string
}

interface AddDatasetProps {
  handleCreateDataset(dataset: Dataset): void
}

export default function useDatasets() {
  const {
    datasetDispatch,
    selectedDataset,
    datasets,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
  } = useContext(DatasetsContext)

  const { updateConnections, handleDeleteDatasetNode, handleAddDatasetNode } = usePlayground()

  function handleAddDataset({ handleCreateDataset }: AddDatasetProps) {
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
      payload: {
        next(dataset) {
          handleAddDatasetNode({
            dataset: dataset,
            handleCreateDataset: handleCreateDataset,
          })
        },
      },
    })
  }

  function handleEditDataset({ datasetId, name, limit, error, success }: EditDatasetProps) {
    const validator = new Validator([
      new DatasetNameValidator({ name: name }),
      new NoDuplicateDataset({ datasets: datasets, name: name, id: datasetId }),
    ])

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASETS_ACTIONS.CHANGE_DATASET_NAME,
          payload: { datasetId: datasetId, newName: name },
        })

        datasetDispatch({
          type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
          payload: { datasetId: datasetId, newLimit: limit },
        })

        success()
      },
      error: error,
    })
  }

  function handleUpdateField({
    datasetId,
    field,
    parentfieldId,
    success,
    error,
  }: UpdateFieldProps) {
    const validator = new Validator([
      new FieldNameValidator({ name: field.name }),
      new NoDuplicateLevelField({
        fieldId: field.id,
        datasetId: datasetId,
        datasets: datasets,
        name: field.name,
        parentId: parentfieldId,
      }),
      new SequentialValuesValidator({ type: field.dataType }),
      new EnumValuesValidator({ type: field.dataType }),
      new PickValuesValidator({ type: field.dataType }),
      new ProbabilityValuesValidator({ type: field.dataType }),
    ])

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASETS_ACTIONS.EDIT_FIELD,
          payload: {
            field: field,
            datasetId: datasetId,
            next: updateConnections,
          },
        })

        success()
      },
      error: error,
    })
  }

  function handleAddField({ datasetId, field, parentfieldId, error, success }: AddFieldProps) {
    const validator = new Validator([
      new FieldNameValidator({ name: field.name }),
      new NoDuplicateLevelField({
        datasetId: datasetId,
        datasets: datasets,
        parentId: parentfieldId,
        name: field.name,
        fieldId: null,
      }),
      new SequentialValuesValidator({ type: field.dataType }),
      new EnumValuesValidator({ type: field.dataType }),
      new PickValuesValidator({ type: field.dataType }),
      new ProbabilityValuesValidator({ type: field.dataType }),
    ])

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASETS_ACTIONS.ADD_NEW_FIELD,
          payload: {
            fieldInfo: {
              name: field.name,
              isArray: field.isArray,
              isPossibleNull: field.isPossibleNull,
              dataType: field.dataType,
              isKey: field.isKey,
            },
            parentfieldId,
            datasetId: datasetId,
            next: updateConnections,
          },
        })

        success()
      },
      error: error,
    })
  }

  function hanldeDeleteDataset(datasetId: string) {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_DATASET,
      payload: { datasetId: datasetId, next: updateConnections },
    })

    if (datasets.length > 0) {
      handleSelectDataset(datasets[0].id)
    }

    handleDeleteDatasetNode(datasetId)
  }

  function handleChangeDocumentsLimit(datasetId: string, limit: number) {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
      payload: {
        datasetId: datasetId,
        newLimit: limit,
      },
    })
  }

  function handleDeleteField({ datasetId, fieldId }: DeleteFieldProps) {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { fieldId: fieldId, datasetId: datasetId, next: updateConnections },
    })
  }

  function get(index: number): Dataset {
    return datasets[index]
  }

  function searchPossibleFieldsToRef({
    datasetId,
    fieldId,
  }: SearchRefFieldsProps): PossibleFieldToRef[] {
    const returnFields = [] as PossibleFieldToRef[]

    for (const dat of datasets) {
      if (dat.id !== datasetId) {
        const fields = dat.allPossibleFieldsToRef()

        for (const f of fields) {
          if (fieldId !== f.id) {
            returnFields.push({
              locationIds: dat.getFieldLocationIds(f.id).join("."),
              locationNames: dat.getFieldLocation(f.id).join("."),
            })
          }
        }
      }
    }

    return returnFields
  }

  function findField(fieldId?: string): Field<FieldDataType, ExportDatatypeDTO> | null {
    if (!fieldId) {
      return null
    }

    let found: Field<FieldDataType, ExportDatatypeDTO> | null = null

    for (let i = 0; i < datasets.length && found === null; i++) {
      found = datasets[i].findFieldById(fieldId)
    }

    return found
  }

  function findFieldByLocation(
    fieldLocation: string[],
  ): Field<FieldDataType, ExportDatatypeDTO> | null {
    const id = fieldLocation.at(-1)
    const found = findField(id)

    return found
  }

  const searchRefField = useCallback(
    (ref: string[]): string[] => {
      const result = [] as string[]

      const datasetId = ref[0]
      const refFields = ref.slice(1)

      const foundDataset = datasets.find((d) => d.id === datasetId)

      if (foundDataset) {
        result.push(foundDataset.name)

        for (const refId of refFields) {
          for (const dataset of datasets) {
            if (dataset.id === datasetId) {
              const found = dataset.findFieldById(refId)

              if (found) {
                result.push(found.name)
                break
              }
            }
          }
        }
      }

      return result
    },
    [datasets],
  )

  return {
    handleAddDataset,
    handleAddField,
    hanldeDeleteDataset,
    handleChangeDocumentsLimit,
    handleEditDataset,
    handleUpdateField,
    selectedDataset,
    datasets,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleDeleteField,
    get,
    handleSelectDataset,
    findField,
    searchPossibleFieldsToRef,
    findFieldByLocation,
    handleOpenFieldsMenu,
    searchRefField,
  }
}
