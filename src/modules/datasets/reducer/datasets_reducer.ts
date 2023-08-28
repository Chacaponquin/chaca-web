import { FieldDataType } from "../interfaces/datasets.interface"
import { DATASETS_ACTIONS } from "../constants"
import { Reducer } from "react"
import { Dataset } from "@modules/datasets/domain/tree"
import { NodeProps } from "@modules/datasets/interfaces/tree.interface"
import { FieldForm } from "@modules/datasets/dto/field"
import { DatasetName } from "../value-object"
import { AddField, DeleteDataset, EditField } from "./cases"

export type DatasetPayload =
  | { type: DATASETS_ACTIONS.DELETE_DATASET; payload: { datasetID: string } }
  | {
      type: DATASETS_ACTIONS.SET_INIT_DATASETS
      payload: { datasets: Array<Dataset> }
    }
  | {
      type: DATASETS_ACTIONS.ADD_NEW_FIELD
      payload: {
        parentFieldID: string
        fieldInfo: NodeProps<FieldDataType>
        datasetID: string
      }
    }
  | {
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET
      payload: { datasetName: DatasetName }
    }
  | {
      type: DATASETS_ACTIONS.EDIT_FIELD
      payload: {
        field: FieldForm
        datasetID: string
      }
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT
      payload: { datasetID: string; newLimit: number }
    }
  | {
      type: DATASETS_ACTIONS.DELETE_FIELD
      payload: { datasetID: string; fieldID: string }
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_DATASET_NAME
      payload: {
        datasetID: string
        newName: DatasetName
      }
    }

export const datasetsReducer: Reducer<Array<Dataset>, DatasetPayload> = (
  datasets: Array<Dataset>,
  action: DatasetPayload,
): Array<Dataset> => {
  switch (action.type) {
    case DATASETS_ACTIONS.EDIT_FIELD: {
      const useCase = new EditField(datasets)
      return useCase.execute({ datasetId: action.payload.datasetID, form: action.payload.field })
    }

    case DATASETS_ACTIONS.DELETE_DATASET: {
      const useCase = new DeleteDataset(datasets)
      return useCase.execute(action.payload.datasetID)
    }

    case DATASETS_ACTIONS.SET_INIT_DATASETS: {
      return action.payload.datasets
    }

    case DATASETS_ACTIONS.ADD_NEW_FIELD: {
      const useCase = new AddField(datasets)
      return useCase.execute({
        datasetId: action.payload.datasetID,
        field: action.payload.fieldInfo,
        parentId: action.payload.parentFieldID,
      })
    }

    case DATASETS_ACTIONS.CREATE_NEW_DATASET: {
      const dataset = new Dataset({ name: action.payload.datasetName })
      return [...datasets, dataset]
    }

    case DATASETS_ACTIONS.CHANGE_DATASET_LIMIT: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.setLimit(action.payload.newLimit)
        }

        return dat
      })

      return newDatasets
    }

    case DATASETS_ACTIONS.DELETE_FIELD: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.deleteField(action.payload.fieldID)
        }

        return dat
      })

      return newDatasets
    }

    case DATASETS_ACTIONS.CHANGE_DATASET_NAME: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.setName(action.payload.newName)
        }

        return dat
      })

      return newDatasets
    }
    default:
      return datasets
  }
}
