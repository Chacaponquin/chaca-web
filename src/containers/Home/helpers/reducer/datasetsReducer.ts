import {
  DatasetField,
  FieldDataType,
  SingleValueDataType,
} from "../../../../shared/interfaces/datasets.interface";
import { DATASETS_ACTIONS } from "../../constants/ACTION_TYPES";
import { Reducer } from "react";
import { Schema } from "../../../../shared/interfaces/options.interface";
import { DatasetTree, FieldNode } from "../../../../shared/helpers/DatasetTree";
import { DATA_TYPES } from "../../../../shared/constant/DATA_TYPES";

export type DatasetPayload =
  | {
      type: DATASETS_ACTIONS.SET_INIT_DATASETS;
      payload: { datasets: DatasetTree[] };
    }
  | {
      type: DATASETS_ACTIONS.ADD_NEW_FIELD;
      payload: {
        fieldName: string;
        location: string[];
        schemas: Schema[];
      };
    }
  | {
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET;
      payload: { datasetName: string };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_FIELD_NAME;
      payload: { datasetID: string; fieldID: string; newName: string };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE;
      payload: {
        datasetID: string;
        fieldID: string;
        dataType: FieldDataType;
      };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT;
      payload: { datasetID: string; newLimit: number };
    }
  | {
      type: DATASETS_ACTIONS.DELETE_FIELD;
      payload: { datasetID: string; fieldID: string };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_POSIBLE_NULL;
      payload: {
        datasetID: string;
        fieldID: string;
        value: boolean;
      };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_TO_ARRAY_TYPE;
      payload: {
        datasetID: string;
        fieldID: string;
        isArray: boolean;
      };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS;
      payload: {
        datasetID: string;
        fieldID: string;
        min: number;
        max: number;
      };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_DATASET_NAME;
      payload: {
        datasetID: string;
        newName: string;
      };
    }
  | {
      type: DATASETS_ACTIONS.NEW_FIELD_MIXED_TYPE;
      payload: {
        datasetID: string;
        fieldID: string;
        field: DatasetField<SingleValueDataType>;
        options: Schema[];
      };
    };

export const datasetsReducer: Reducer<DatasetTree[], DatasetPayload> = (
  datasets: DatasetTree[],
  action: DatasetPayload
): DatasetTree[] => {
  switch (action.type) {
    case DATASETS_ACTIONS.SET_INIT_DATASETS: {
      return action.payload.datasets;
    }

    case DATASETS_ACTIONS.ADD_NEW_FIELD: {
      console.log("Hola");
      const newDatasets = datasets.map((d) => {
        if (d.name === action.payload.location[0]) {
          const newNode = new FieldNode<SingleValueDataType>(
            action.payload.fieldName,
            {
              isArray: null,
              isPosibleNull: false,
              dataType: {
                type: DATA_TYPES.SINGLE_VALUE,
                fieldType: {
                  args: {},
                  parent: action.payload.schemas[0].parent,
                  type: action.payload.schemas[0].options[0].name,
                },
              },
            }
          );

          d.setNodeByLocation(newNode, action.payload.location.slice(1));

          console.log(d.getDatasetObject());
        }

        return d;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.CREATE_NEW_DATASET: {
      const dataset = new DatasetTree(action.payload.datasetName, 50);
      return [...datasets, dataset];
    }

    case DATASETS_ACTIONS.CHANGE_FIELD_NAME: {
      const newDatasets = datasets.map((d) => {
        if (d.id === action.payload.datasetID) {
          const foundField = d.findFieldByID(action.payload.fieldID);

          // cambiar nombre del field
          if (foundField) {
            foundField.name = action.payload.newName;
          }
        }

        return d;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const foundField = dat.findFieldByID(action.payload.fieldID);

          // cambiar dataType del field
          if (foundField) {
            foundField.info.dataType = action.payload.dataType;
          }
        }

        return dat;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_DATASET_LIMIT: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.setLimit(action.payload.newLimit);
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.DELETE_FIELD: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          // borrar el field
          dat.deleteField(action.payload.fieldID);
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.CHANGE_POSIBLE_NULL: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const foundField = dat.findFieldByID(action.payload.fieldID);

          if (foundField) {
            foundField.info.isPosibleNull = action.payload.value;
          }
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.CHANGE_TO_ARRAY_TYPE: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const foundField = dat.findFieldByID(action.payload.fieldID);

          if (foundField) {
            if (action.payload.isArray)
              foundField.info.isArray = { min: 0, max: 10 };
            else foundField.info.isArray = null;
          }
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const foundField = dat.findFieldByID(action.payload.fieldID);

          if (foundField) {
            foundField.info.isArray = {
              min: action.payload.min,
              max: action.payload.max,
            };
          }
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.CHANGE_DATASET_NAME: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.setName(action.payload.newName);
        }

        return dat;
      });

      return newDatasets;
    }
    default:
      return datasets;
  }
};
