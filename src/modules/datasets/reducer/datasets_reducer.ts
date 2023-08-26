import { FieldDataType } from "../interfaces/datasets.interface"
import { DATASETS_ACTIONS } from "../constants"
import { Reducer } from "react"
import { Dataset, FieldNode } from "@modules/datasets/domain/tree"
import { NodeProps } from "@modules/datasets/interfaces/tree.interface"
import { FieldForm } from "@modules/datasets/dto/field"

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
      payload: { datasetName: string }
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
        newName: string
      }
    }

export const datasetsReducer: Reducer<Array<Dataset>, DatasetPayload> = (
  datasets: Array<Dataset>,
  action: DatasetPayload,
): Array<Dataset> => {
  switch (action.type) {
    case DATASETS_ACTIONS.EDIT_FIELD: {
      const newDatasets = datasets.map((d) => {
        if (d.id === action.payload.datasetID) {
          const findField = d.findFieldByID(action.payload.field.id)

          if (findField) {
            findField.setName(action.payload.field.name)
            findField.setIsArray(action.payload.field.isArray)
            findField.setIsPossibleNull(action.payload.field.isPosibleNull)
          }
        }

        return d
      })

      return newDatasets
    }

    case DATASETS_ACTIONS.DELETE_DATASET: {
      return datasets.filter((d) => d.id !== action.payload.datasetID)
    }

    case DATASETS_ACTIONS.SET_INIT_DATASETS: {
      return action.payload.datasets
    }

    case DATASETS_ACTIONS.ADD_NEW_FIELD: {
      // crear nuevo field node
      const newNode = FieldNode.create(action.payload.fieldInfo)

      const newDatasets = datasets.map((d) => {
        if (d.id === action.payload.datasetID) {
          // si el id del dataset y del parent son iguales significa que se tiene que insertar en el root
          if (action.payload.datasetID === action.payload.parentFieldID) {
            d.insertField(newNode)
          }

          // se busca el parent field y si se encuentra se inserta en nuevo nodo en el
          else {
            const findParent = d.findFieldByID(action.payload.parentFieldID)

            if (findParent) {
              findParent.insertNode(newNode)
            }
          }
        }

        return d
      })

      return newDatasets
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
          // borrar el field
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
