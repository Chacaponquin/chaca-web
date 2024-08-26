import { DatasetsContext } from "../context"
import { useCallback, useContext } from "react"
import { DATASETS_ACTIONS } from "../domain/constants"
import { Dataset, Field } from "@modules/datasets/domain/core"
import { PossibleFieldToRef } from "../interfaces/ref"
import { DatasetValidator } from "../domain/validators/dataset"
import { DatasetError } from "../errors/dataset"
import { usePlayground } from "@modules/playground/hooks"
import { DatasetNodeBuilder } from "@modules/playground/domain"
import { FieldValidator } from "../domain/validators/field"
import { FieldProps } from "../dto/field"

interface AddFieldProps {
  field: FieldProps
  parentfieldId: string
  datasetId: string
  success(): void
  error(error: DatasetError): void
}

interface CloneDatasetProps {
  id: string
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

export default function useDatasets() {
  const {
    datasetDispatch,
    selectedDataset,
    datasets,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
    handleClearDatasets,
  } = useContext(DatasetsContext)

  const { updateConnections, handleDeleteDatasetNode, handleChangeNodes } = usePlayground()

  function handleAddDataset() {
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
      payload: {
        next(dataset) {
          handleChangeNodes((prev) => {
            return [...prev, DatasetNodeBuilder.default({ dataset: dataset })]
          })
        },
      },
    })
  }

  function handleEditDataset({ datasetId, name, limit, error, success }: EditDatasetProps) {
    const validator = new DatasetValidator({ datasetId, datasets, name })

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
    const validator = new FieldValidator({
      datasets: datasets,
      datasetId: datasetId,
      parentfieldId: parentfieldId,
      name: field.name,
      datatype: field.datatype,
      id: field.id,
    })

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
    const validator = new FieldValidator({
      name: field.name,
      datatype: field.datatype,
      id: null,
      datasetId: datasetId,
      parentfieldId: parentfieldId,
      datasets: datasets,
    })

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASETS_ACTIONS.ADD_NEW_FIELD,
          payload: {
            fieldInfo: {
              name: field.name,
              isArray: field.isArray,
              isPossibleNull: field.isPossibleNull,
              datatype: field.datatype,
              isKey: field.isKey,
              id: field.id,
            },
            parentfieldId: parentfieldId,
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

  function findField(fieldId?: string): Field | null {
    if (!fieldId) {
      return null
    }

    let found: Field | null = null

    for (let i = 0; i < datasets.length && found === null; i++) {
      found = datasets[i].findFieldById(fieldId)
    }

    return found
  }

  function findFieldByLocation(fieldLocation: string[]): Field | null {
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

  function handleCloneDataset({ id }: CloneDatasetProps) {
    const found = datasets.find((d) => d.id === id)

    if (found) {
      datasetDispatch({
        type: DATASETS_ACTIONS.INSERT_DATASET,
        payload: {
          dataset: found.clone(),
          next(dataset) {
            handleChangeNodes((prev) => {
              const newNodes = [...prev, DatasetNodeBuilder.default({ dataset: dataset })]

              return newNodes
            })

            updateConnections([...datasets, dataset])
          },
        },
      })
    }
  }

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
    handleCloneDataset,
    handleClearDatasets,
  }
}
