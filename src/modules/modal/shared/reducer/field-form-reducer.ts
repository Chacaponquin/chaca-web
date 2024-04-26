import {
  ArrayValue,
  FieldDataType,
  ProbabilityValue,
} from "@modules/datasets/interfaces/dataset-field"
import { FORM_ACTIONS } from "../constants"
import { Reducer } from "react"
import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldForm } from "@modules/modal/interfaces"

export type FieldFormPayload =
  | {
      type: FORM_ACTIONS.CHANGE_ARRAY_LIMITS
      payload: {
        min: number
        max: number
      }
    }
  | {
      type: FORM_ACTIONS.CHANGE_REF_DATATYPE
      payload: {
        ref: string[]
        unique: boolean
      }
    }
  | {
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE
      payload: {
        dataType: FieldDataType
      }
    }
  | {
      type: FORM_ACTIONS.CHANGE_FIELD_NAME
      payload: { newName: string }
    }
  | {
      type: FORM_ACTIONS.CHANGE_POSIBLE_NULL
      payload: {
        value: number
      }
    }
  | {
      type: FORM_ACTIONS.CHANGE_TO_ARRAY_TYPE
      payload: {
        isArray: boolean
      }
    }
  | {
      type: FORM_ACTIONS.CHNAGE_IS_KEY
      payload: {
        value: boolean
      }
    }
  | { type: FORM_ACTIONS.RESET_CONFIG }
  | { type: FORM_ACTIONS.CHANGE_SEQUENTIAL_FIELD; payload: { values: ArrayValue[]; loop: boolean } }
  | { type: FORM_ACTIONS.CHNAGE_ENUM_FIELD; payload: { values: ArrayValue[] } }
  | { type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD; payload: { startsWith: number; step: number } }
  | { type: FORM_ACTIONS.CHANGE_PICK_DATATYPE; payload: { count: number; values: ArrayValue[] } }
  | { type: FORM_ACTIONS.CHANGE_PROBABILITY_DATATYPE; payload: { values: ProbabilityValue[] } }

export const fieldFormReducer: Reducer<FieldForm, FieldFormPayload> = (
  form: FieldForm,
  action: FieldFormPayload,
): FieldForm => {
  switch (action.type) {
    case FORM_ACTIONS.CHANGE_POSIBLE_NULL: {
      return { ...form, isPossibleNull: action.payload.value }
    }

    case FORM_ACTIONS.CHANGE_ARRAY_LIMITS: {
      return { ...form, isArray: { max: action.payload.max, min: action.payload.min } }
    }

    case FORM_ACTIONS.CHANGE_TO_ARRAY_TYPE: {
      return { ...form, isArray: action.payload.isArray ? { min: 0, max: 10 } : null }
    }

    case FORM_ACTIONS.CHANGE_FIELD_NAME: {
      return { ...form, name: action.payload.newName }
    }

    case FORM_ACTIONS.CHANGE_FIELD_DATATYPE: {
      return { ...form, dataType: action.payload.dataType }
    }

    case FORM_ACTIONS.CHNAGE_IS_KEY: {
      return { ...form, isKey: action.payload.value, isArray: null, isPossibleNull: 0 }
    }

    case FORM_ACTIONS.RESET_CONFIG: {
      return { ...form, isArray: null, isPossibleNull: 0, isKey: false }
    }

    case FORM_ACTIONS.CHANGE_SEQUENTIAL_FIELD: {
      return {
        ...form,
        dataType: {
          type: DATA_TYPES.SEQUENTIAL,
          values: action.payload.values,
          loop: action.payload.loop,
        },
      }
    }

    case FORM_ACTIONS.CHNAGE_ENUM_FIELD: {
      return { ...form, dataType: { type: DATA_TYPES.ENUM, values: action.payload.values } }
    }

    case FORM_ACTIONS.CHANGE_REF_DATATYPE: {
      return {
        ...form,
        dataType: { type: DATA_TYPES.REF, ref: action.payload.ref, unique: action.payload.unique },
      }
    }

    case FORM_ACTIONS.CHANGE_SEQUENCE_FIELD: {
      return {
        ...form,
        dataType: {
          type: DATA_TYPES.SEQUENCE,
          startsWith: action.payload.startsWith,
          step: action.payload.step,
        },
      }
    }

    case FORM_ACTIONS.CHANGE_PICK_DATATYPE: {
      return {
        ...form,
        dataType: {
          type: DATA_TYPES.PICK,
          count: action.payload.count,
          values: action.payload.values,
        },
      }
    }

    case FORM_ACTIONS.CHANGE_PROBABILITY_DATATYPE: {
      return { ...form, dataType: { type: DATA_TYPES.PROBABILITY, values: action.payload.values } }
    }

    default:
      return form
  }
}
