import { CODE_TYPES } from "../constant/CODE_TYPES";
import { DATA_TYPES } from "../constant/DATA_TYPES";

export interface Dataset {
  name: string;
  id: string;
  limit: number;
  fields: DatasetField[];
}

export type FieldDataType =
  | {
      type: DATA_TYPES.CUSTOM;
      code: string;
      codeType: CODE_TYPES;
    }
  | {
      type: DATA_TYPES.MIXED;
      object: DatasetField[];
    }
  | {
      type: DATA_TYPES.SINGLE_VALUE;
      fieldType: TypeSchema;
    }
  | { type: DATA_TYPES.REF; ref: string; fieldRef: string };

export interface DatasetField {
  name: string;
  id: string;
  dataType: FieldDataType;
  isPosibleNull: boolean;
  isArray:
    | {
        min: number;
        max: number;
      }
    | false;
}

export type FieldArgument = string | number | Date | boolean | FieldArgument[];

export interface TypeSchema {
  parent: string;
  type: string;
  args: { [key: string]: FieldArgument };
}
