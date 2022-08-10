import { DATASETS_ACTIONS } from "./ActionTypes";
import { createField, createInitialDataset } from "./createInitialFunctions";

export const datasetsReducer = (datasets, action) => {
  switch (action.type) {
    case DATASETS_ACTIONS.ADD_NEW_FIELD: {
      const newDatasets = datasets.map((el) => {
        if (el.id === action.payload.datasetID) {
          return {
            ...el,
            fields: [...el.fields, createField(0)],
          };
        }

        return el;
      });

      return newDatasets;
    }
    case DATASETS_ACTIONS.CREATE_NEW_DATASET: {
      return [...datasets, createInitialDataset(datasets.length)];
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
    case DATASETS_ACTIONS.SELECT_FIELD_TYPE: {
      const newDatasets = datasets.map((dat) => {
        if (dat.id === action.payload.datasetID) {
          const newFields = dat.fields.map((f) => {
            if (f.id === action.payload.fieldID) {
              f.type = {
                parent: action.payload.parent,
                type: action.payload.type,
              };
              f.dataType = action.payload.dataType;
              f.args = action.payload.args;
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
    default:
      return datasets;
  }
};
