import { DATASET_ACTIONS } from "../domain/constants"
import { Reducer } from "react"
import { Schema } from "@modules/dataset/domain/core/schema"
import { NodeProps } from "@modules/dataset/domain/core/dataset-props"
import {
  AddSchema,
  AddField,
  ChangeSchemaLimit,
  ChangeSchemaName,
  DeleteSchema,
  DeleteField,
  EditField,
  InsertSchema,
} from "./cases"
import { DeleteReceiveRef } from "./cases/delete-receive-ref"
import { DatasetNameGenerator } from "./cases/schema-name-generator"
import { FieldProps } from "../domain/core/field-props"

export type DatasetPayload =
  | {
      type: DATASET_ACTIONS.DELETE_SCHEMA
      payload: { schemaId: string; next(dataset: Schema[]): void }
    }
  | {
      type: DATASET_ACTIONS.INSERT_SCHEMA
      payload: { schema: Schema; next(schema: Schema): void }
    }
  | {
      type: DATASET_ACTIONS.SET_INIT_DATASET
      payload: { dataset: Schema[] }
    }
  | {
      type: DATASET_ACTIONS.ADD_NEW_FIELD
      payload: {
        parentfieldId: string
        fieldInfo: NodeProps
        schemaId: string
        next(dataset: Schema[]): void
      }
    }
  | {
      type: DATASET_ACTIONS.CREATE_NEW_SCHEMA
      payload: {
        next(schema: Schema): void
      }
    }
  | {
      type: DATASET_ACTIONS.EDIT_FIELD
      payload: {
        field: FieldProps
        schemaId: string
        next(dataset: Schema[]): void
      }
    }
  | {
      type: DATASET_ACTIONS.CHANGE_SCHEMA_LIMIT
      payload: { schemaId: string; newLimit: number }
    }
  | {
      type: DATASET_ACTIONS.DELETE_FIELD
      payload: { schemaId: string; fieldId: string; next(dataset: Schema[]): void }
    }
  | {
      type: DATASET_ACTIONS.CHANGE_SCHEMA_NAME
      payload: {
        schemaId: string
        newName: string
      }
    }
  | { type: DATASET_ACTIONS.CLEAR }

export const datasetReducer: Reducer<Schema[], DatasetPayload> = (
  dataset: Schema[],
  action: DatasetPayload,
): Schema[] => {
  switch (action.type) {
    case DATASET_ACTIONS.EDIT_FIELD: {
      const deleteRefs = new DeleteReceiveRef()

      const useCase = new EditField(dataset, deleteRefs)
      return useCase.execute({
        schemaId: action.payload.schemaId,
        form: action.payload.field,
        next: action.payload.next,
      })
    }

    case DATASET_ACTIONS.INSERT_SCHEMA: {
      const useCase = new InsertSchema(dataset)
      return useCase.execute({ schema: action.payload.schema, next: action.payload.next })
    }

    case DATASET_ACTIONS.DELETE_SCHEMA: {
      const deleteRefs = new DeleteReceiveRef()

      const useCase = new DeleteSchema(dataset, deleteRefs)
      return useCase.execute({ schemaId: action.payload.schemaId, next: action.payload.next })
    }

    case DATASET_ACTIONS.SET_INIT_DATASET: {
      return action.payload.dataset
    }

    case DATASET_ACTIONS.ADD_NEW_FIELD: {
      const useCase = new AddField(dataset)
      return useCase.execute({
        schemaId: action.payload.schemaId,
        field: action.payload.fieldInfo,
        parentId: action.payload.parentfieldId,
        next: action.payload.next,
      })
    }

    case DATASET_ACTIONS.CREATE_NEW_SCHEMA: {
      const generator = new DatasetNameGenerator(dataset)

      const useCase = new AddSchema(dataset, generator)
      return useCase.execute({ next: action.payload.next })
    }

    case DATASET_ACTIONS.CHANGE_SCHEMA_LIMIT: {
      const useCase = new ChangeSchemaLimit(dataset)
      return useCase.execute({
        limit: action.payload.newLimit,
        schemaId: action.payload.schemaId,
      })
    }

    case DATASET_ACTIONS.DELETE_FIELD: {
      const deleteRefs = new DeleteReceiveRef()

      const useCase = new DeleteField(dataset, deleteRefs)
      return useCase.execute({
        schemaId: action.payload.schemaId,
        fieldId: action.payload.fieldId,
        next: action.payload.next,
      })
    }

    case DATASET_ACTIONS.CHANGE_SCHEMA_NAME: {
      const useCase = new ChangeSchemaName(dataset)
      return useCase.execute({
        schemaId: action.payload.schemaId,
        newName: action.payload.newName,
      })
    }

    case DATASET_ACTIONS.CLEAR: {
      return []
    }

    default:
      return dataset
  }
}
