import { DatasetContext } from "../context"
import { useCallback, useContext } from "react"
import { DATASET_ACTIONS } from "../domain/constants"
import { PossibleFieldToRef } from "../interfaces/ref"
import { SchemaValidator } from "../domain/validators/dataset"
import { DatasetError } from "../errors/dataset"
import { usePlayground } from "@modules/playground/hooks"
import { DatasetNodeBuilder } from "@modules/playground/domain"
import { FieldValidator } from "../domain/validators/field"
import { FieldProps } from "../domain/core/field-props"
import { Field } from "../domain/core/field"
import { Schema } from "../domain/core/schema"

interface AddFieldProps {
  field: FieldProps
  parentfieldId: string
  schemaId: string
  success(): void
  error(error: DatasetError): void
}

interface CloneProps {
  id: string
}

interface UpdateFieldProps {
  field: FieldProps
  parentfieldId: string
  schemaId: string
  success(): void
  error(error: DatasetError): void
}

interface EditDatasetProps {
  name: string
  schemaId: string
  limit: number
  success(): void
  error(error: DatasetError): void
}

interface DeleteFieldProps {
  schemaId: string
  fieldId: string
}

interface SearchRefFieldsProps {
  schemaId: string
  fieldId: string
}

interface ChangeDocumentsLimit {
  schemaId: string
  limit: number
}

export default function useDataset() {
  const {
    datasetDispatch,
    selectedSchema,
    dataset,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
    handleClearDataset,
  } = useContext(DatasetContext)

  const { updateConnections, handleDeleteDatasetNode, handleChangeNodes } = usePlayground()

  function handleAddSchema() {
    datasetDispatch({
      type: DATASET_ACTIONS.CREATE_NEW_SCHEMA,
      payload: {
        next(schema) {
          handleChangeNodes((prev) => {
            return [...prev, DatasetNodeBuilder.default({ schema: schema })]
          })
        },
      },
    })
  }

  function handleEditSchema({ schemaId, name, limit, error, success }: EditDatasetProps) {
    const validator = new SchemaValidator({ schemaId: schemaId, dataset: dataset, name: name })

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASET_ACTIONS.CHANGE_SCHEMA_NAME,
          payload: { schemaId: schemaId, newName: name },
        })

        datasetDispatch({
          type: DATASET_ACTIONS.CHANGE_SCHEMA_LIMIT,
          payload: { schemaId: schemaId, newLimit: limit },
        })

        success()
      },
      error: error,
    })
  }

  function handleUpdateField({ schemaId, field, parentfieldId, success, error }: UpdateFieldProps) {
    const validator = new FieldValidator({
      dataset: dataset,
      schemaId: schemaId,
      parentfieldId: parentfieldId,
      name: field.name,
      datatype: field.datatype,
      id: field.id,
    })

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASET_ACTIONS.EDIT_FIELD,
          payload: {
            field: field,
            schemaId: schemaId,
            next: updateConnections,
          },
        })

        success()
      },
      error: error,
    })
  }

  function handleAddField({ schemaId, field, parentfieldId, error, success }: AddFieldProps) {
    const validator = new FieldValidator({
      name: field.name,
      datatype: field.datatype,
      id: null,
      schemaId: schemaId,
      parentfieldId: parentfieldId,
      dataset: dataset,
    })

    validator.execute({
      success() {
        datasetDispatch({
          type: DATASET_ACTIONS.ADD_NEW_FIELD,
          payload: {
            fieldInfo: {
              name: field.name,
              isArray: field.isArray,
              possibleNull: field.possibleNull,
              datatype: field.datatype,
              isKey: field.isKey,
              id: field.id,
            },
            parentfieldId: parentfieldId,
            schemaId: schemaId,
            next: updateConnections,
          },
        })

        success()
      },
      error: error,
    })
  }

  function handleDeleteSchema(schemaId: string) {
    datasetDispatch({
      type: DATASET_ACTIONS.DELETE_SCHEMA,
      payload: { schemaId: schemaId, next: updateConnections },
    })

    if (dataset.length > 0) {
      handleSelectDataset(dataset[0].id)
    }

    handleDeleteDatasetNode(schemaId)
  }

  function handleChangeDocumentsLimit({ limit, schemaId }: ChangeDocumentsLimit) {
    datasetDispatch({
      type: DATASET_ACTIONS.CHANGE_SCHEMA_LIMIT,
      payload: {
        schemaId: schemaId,
        newLimit: limit,
      },
    })
  }

  function handleDeleteField({ schemaId, fieldId }: DeleteFieldProps) {
    datasetDispatch({
      type: DATASET_ACTIONS.DELETE_FIELD,
      payload: { fieldId: fieldId, schemaId: schemaId, next: updateConnections },
    })
  }

  function get(index: number): Schema {
    return dataset[index]
  }

  function searchPossibleFieldsToRef({
    schemaId,
    fieldId,
  }: SearchRefFieldsProps): PossibleFieldToRef[] {
    const returnFields = [] as PossibleFieldToRef[]

    for (const dat of dataset) {
      if (dat.id !== schemaId) {
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

    for (let i = 0; i < dataset.length && found === null; i++) {
      found = dataset[i].findFieldById(fieldId)
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

      const schemaId = ref[0]
      const refFields = ref.slice(1)

      const found = dataset.find((d) => d.id === schemaId)

      if (found) {
        result.push(found.name)

        for (const refId of refFields) {
          for (const schema of dataset) {
            if (schema.id === schemaId) {
              const foundField = schema.findFieldById(refId)

              if (foundField) {
                result.push(foundField.name)
                break
              }
            }
          }
        }
      }

      return result
    },
    [dataset],
  )

  function handleCloneSchema({ id }: CloneProps) {
    const found = dataset.find((d) => d.id === id)

    if (found) {
      datasetDispatch({
        type: DATASET_ACTIONS.INSERT_SCHEMA,
        payload: {
          schema: found.clone(),
          next(schema) {
            handleChangeNodes((prev) => {
              const newNodes = [...prev, DatasetNodeBuilder.default({ schema: schema })]

              return newNodes
            })

            updateConnections([...dataset, schema])
          },
        },
      })
    }
  }

  return {
    handleAddSchema,
    handleAddField,
    handleDeleteSchema,
    handleChangeDocumentsLimit,
    handleEditSchema,
    handleUpdateField,
    selectedSchema,
    dataset,
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
    handleCloneSchema,
    handleClearDataset,
  }
}
