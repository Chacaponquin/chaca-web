import { DATASETS_ACTIONS } from "../domain/constants"
import { Reducer } from "react"
import { Dataset } from "@modules/datasets/domain/core"
import { NodeProps } from "@modules/datasets/interfaces/dataset"
import {
  AddDataset,
  AddField,
  ChangeDatasetLimit,
  ChangeDatasetName,
  DeleteDataset,
  DeleteField,
  EditField,
  InsertDataset,
} from "./cases"
import { DeleteReceiveRef } from "./cases/DeleteReceiveRef"
import { DatasetNameGenerator } from "./cases/DatasetNameGenerator"
import { FieldProps } from "../dto/field"

export type DatasetPayload =
  | {
      type: DATASETS_ACTIONS.DELETE_DATASET
      payload: { datasetId: string; next(datasets: Dataset[]): void }
    }
  | {
      type: DATASETS_ACTIONS.INSERT_DATASET
      payload: { dataset: Dataset; next(dataset: Dataset): void }
    }
  | {
      type: DATASETS_ACTIONS.SET_INIT_DATASETS
      payload: { datasets: Dataset[] }
    }
  | {
      type: DATASETS_ACTIONS.ADD_NEW_FIELD
      payload: {
        parentfieldId: string
        fieldInfo: NodeProps
        datasetId: string
        next(datasets: Dataset[]): void
      }
    }
  | {
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET
      payload: {
        next(dataset: Dataset): void
      }
    }
  | {
      type: DATASETS_ACTIONS.EDIT_FIELD
      payload: {
        field: FieldProps
        datasetId: string
        next(datasets: Dataset[]): void
      }
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT
      payload: { datasetId: string; newLimit: number }
    }
  | {
      type: DATASETS_ACTIONS.DELETE_FIELD
      payload: { datasetId: string; fieldId: string; next(datasets: Dataset[]): void }
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_DATASET_NAME
      payload: {
        datasetId: string
        newName: string
      }
    }
  | { type: DATASETS_ACTIONS.CLEAR }

export const datasetsReducer: Reducer<Dataset[], DatasetPayload> = (
  datasets: Dataset[],
  action: DatasetPayload,
): Dataset[] => {
  switch (action.type) {
    case DATASETS_ACTIONS.EDIT_FIELD: {
      const deleteRefs = new DeleteReceiveRef()

      const useCase = new EditField(datasets, deleteRefs)
      return useCase.execute({
        datasetId: action.payload.datasetId,
        form: action.payload.field,
        next: action.payload.next,
      })
    }

    case DATASETS_ACTIONS.INSERT_DATASET: {
      const useCase = new InsertDataset(datasets)
      return useCase.execute({ dataset: action.payload.dataset, next: action.payload.next })
    }

    case DATASETS_ACTIONS.DELETE_DATASET: {
      const deleteRefs = new DeleteReceiveRef()

      const useCase = new DeleteDataset(datasets, deleteRefs)
      return useCase.execute({ datasetId: action.payload.datasetId, next: action.payload.next })
    }

    case DATASETS_ACTIONS.SET_INIT_DATASETS: {
      return action.payload.datasets
    }

    case DATASETS_ACTIONS.ADD_NEW_FIELD: {
      const useCase = new AddField(datasets)
      return useCase.execute({
        datasetId: action.payload.datasetId,
        field: action.payload.fieldInfo,
        parentId: action.payload.parentfieldId,
        next: action.payload.next,
      })
    }

    case DATASETS_ACTIONS.CREATE_NEW_DATASET: {
      const generator = new DatasetNameGenerator(datasets)

      const useCase = new AddDataset(datasets, generator)
      return useCase.execute({ next: action.payload.next })
    }

    case DATASETS_ACTIONS.CHANGE_DATASET_LIMIT: {
      const useCase = new ChangeDatasetLimit(datasets)
      return useCase.execute({
        limit: action.payload.newLimit,
        datasetId: action.payload.datasetId,
      })
    }

    case DATASETS_ACTIONS.DELETE_FIELD: {
      const deleteRefs = new DeleteReceiveRef()

      const useCase = new DeleteField(datasets, deleteRefs)
      return useCase.execute({
        datasetId: action.payload.datasetId,
        fieldId: action.payload.fieldId,
        next: action.payload.next,
      })
    }

    case DATASETS_ACTIONS.CHANGE_DATASET_NAME: {
      const useCase = new ChangeDatasetName(datasets)
      return useCase.execute({
        datasetId: action.payload.datasetId,
        newName: action.payload.newName,
      })
    }

    case DATASETS_ACTIONS.CLEAR: {
      return []
    }

    default:
      return datasets
  }
}
