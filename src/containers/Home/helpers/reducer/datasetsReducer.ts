import {
  Dataset,
  DatasetField,
  FieldDataType,
  SingleValueDataType,
} from "../../../../shared/interfaces/datasets.interface";
import { CreateIntialData } from "../CreateData";
import { DATASETS_ACTIONS } from "./ACTION_TYPES";
import { Reducer } from "react";
import { FieldOptions } from "../../../../shared/interfaces/options.interface";

export type DatasetPayload =
  | {
      type: DATASETS_ACTIONS.SET_INIT_DATASETS;
      payload: { options: FieldOptions[] };
    }
  | {
      type: DATASETS_ACTIONS.ADD_NEW_FIELD;
      payload: { options: FieldOptions[]; datasetID: string };
    }
  | {
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET;
      payload: { options: FieldOptions[] };
    }
  | {
      type: DATASETS_ACTIONS.CHANGE_FIELD_NAME;
      payload: { datasetID: string; fieldID: string; value: string };
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
      payload: { datasetID: string; value: number };
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
        value: boolean;
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
        value: string;
      };
    }
  | {
      type: DATASETS_ACTIONS.NEW_FIELD_MIXED_TYPE;
      payload: {
        datasetID: string;
        fieldID: string;
        field: DatasetField<SingleValueDataType>;
        options: FieldOptions[];
      };
    };

export const datasetsReducer: Reducer<Dataset[], DatasetPayload> = (
  datasets: Dataset[],
  action: DatasetPayload
): Dataset[] => {
  switch (action.type) {
    case DATASETS_ACTIONS.SET_INIT_DATASETS: {
      return [
        new CreateIntialData(action.payload.options).createDefaultDataset(
          0,
          true
        ),
      ];
    }
    case DATASETS_ACTIONS.ADD_NEW_FIELD: {
      const newDatasets = datasets.map((el) => {
        if (el.id === action.payload.datasetID) {
          return {
            ...el,
            fields: [
              ...el.fields,
              new CreateIntialData(action.payload.options).createField(),
            ],
          };
        }

        return el;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CREATE_NEW_DATASET: {
      return [
        ...datasets,
        new CreateIntialData(action.payload.options).createDefaultDataset(
          datasets.length
        ),
      ];
    }
    case DATASETS_ACTIONS.CHANGE_FIELD_NAME: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.map((f) => {
            if (f.id === action.payload.fieldID) f.name = action.payload.value;

            return f;
          });

          dat.fields = newFields;
        }

        return dat;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.map((f) => {
            if (f.id === action.payload.fieldID) {
              f.dataType = action.payload.dataType;
            }

            return f;
          });

          dat.fields = newFields;
        }

        return dat;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_DATASET_LIMIT: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.limit = action.payload.value;
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.DELETE_FIELD: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.filter(
            (f) => f.id !== action.payload.fieldID
          );

          dat.fields = newFields;
        }

        return dat;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_POSIBLE_NULL: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.map((f) => {
            if (f.id === action.payload.fieldID) {
              f.isPosibleNull = action.payload.value;
            }

            return f;
          });

          dat.fields = newFields;
        }

        return dat;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_TO_ARRAY_TYPE: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.map((f) => {
            if (f.id === action.payload.fieldID) {
              if (action.payload.value) {
                f.isArray = {
                  min: 0,
                  max: 10,
                };
              } else f.isArray = false;
            }

            return f;
          });

          dat.fields = newFields;
        }

        return dat;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.map((f) => {
            if (f.id === action.payload.fieldID) {
              f.isArray = {
                min: action.payload.min,
                max: action.payload.max,
              };
            }

            return f;
          });

          dat.fields = newFields;
        }

        return dat;
      });

      return newDatasets;
    }

    case DATASETS_ACTIONS.CHANGE_DATASET_NAME: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          dat.name = action.payload.value;
        }

        return dat;
      });

      return newDatasets;
    }
    default:
      return datasets;
  }
};
