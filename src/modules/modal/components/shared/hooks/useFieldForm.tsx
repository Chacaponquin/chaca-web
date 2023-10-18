import { FieldForm } from "@modules/datasets/dto/field"
import { useDatatypes } from "@modules/datasets/hooks"
import { useReducer, Reducer } from "react"
import { FieldFormPayload, fieldFormReducer } from "../reducer"
import { FORM_ACTIONS } from "../constants/FORM_ACTIONS"
import { DATA_TYPES } from "@modules/schemas/constants"
import { useSchemaServices } from "@modules/schemas/services"
import {
  SequenceDataType,
  SingleValueDataType,
} from "@modules/datasets/interfaces/dataset_field.interface"
import {
  FieldActions,
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
  UpdateRefProps,
} from "../interfaces/form.interfaces"
import { EnumField, SequentialField } from "@modules/datasets/domain/fields"

interface Props {
  field: FieldForm
  datasetId: string
}

export const useFieldForm = ({ field: inputField, datasetId }: Props): FieldActions => {
  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId: inputField.id, datasetId: datasetId })
  const [field, formDispatch] = useReducer<Reducer<FieldForm, FieldFormPayload>>(
    fieldFormReducer,
    inputField,
  )
  const { findParent } = useSchemaServices()

  function resetForm(): void {
    formDispatch({ type: FORM_ACTIONS.RESET_CONFIG })
  }

  function handleChangeName(name: string) {
    formDispatch({ type: FORM_ACTIONS.CHANGE_FIELD_NAME, payload: { newName: name } })
  }

  function handleChangeIsArray(value: boolean) {
    formDispatch({ type: FORM_ACTIONS.CHANGE_TO_ARRAY_TYPE, payload: { isArray: value } })
  }

  function handleChangeMaxIsArray(max: number | null) {
    if (max && field.isArray) {
      formDispatch({
        type: FORM_ACTIONS.CHANGE_ARRAY_LIMITS,
        payload: { max: max, min: field.isArray.min },
      })
    }
  }

  function handleChangeMinIsArray(min: number | null) {
    if (min && field.isArray) {
      formDispatch({
        type: FORM_ACTIONS.CHANGE_ARRAY_LIMITS,
        payload: { max: field.isArray.max, min: min },
      })
    }
  }

  function handleChangePossibleNull(isNull: boolean) {
    formDispatch({ type: FORM_ACTIONS.CHANGE_POSIBLE_NULL, payload: { value: isNull ? 50 : 0 } })
  }

  function handleChangePossibleNullValue(value: number) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_POSIBLE_NULL,
      payload: { value },
    })
  }

  function handleChangeDataType(dataTypeId: number) {
    const foundDataType = DATA_TYPES_ARRAY.find((d) => d.id === dataTypeId)

    if (foundDataType) {
      formDispatch({
        type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
        payload: { dataType: foundDataType.default },
      })

      resetForm()
    }
  }

  function handleSelectFieldSchema(parent: string) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            schema: parent,
            option: findParent(parent).options[0].id,
          },
        },
      },
    })
  }

  function handleSelectFieldSchemaOption({ optionName, parent }: SelectFieldSchemaOptionProps) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            schema: parent,
            option: optionName,
          },
        },
      },
    })
  }

  function handleUpdateFieldSchemaArguments({ argumentName, value }: UpdateArgumentsProps) {
    const dataType = field.dataType as SingleValueDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            ...dataType.fieldType,
            args: { ...dataType.fieldType.args, [argumentName]: value },
          },
        },
      },
    })
  }

  function handleUpdateRefField({ currentFieldID, currentLocation }: UpdateRefProps) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.REF,
          ref: [...currentLocation, currentFieldID],
        },
      },
    })
  }

  function handleUpdateCustomField({ code }: { code: string }) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.CUSTOM,
          code: code,
        },
      },
    })
  }

  function handleChangeIsKey(v: boolean): void {
    formDispatch({ type: FORM_ACTIONS.CHNAGE_IS_KEY, payload: { value: v } })
  }

  function handleChangeSequentialValues(valuesString: string): void {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENTIAL_FIELD,
      payload: { values: SequentialField.transformString(valuesString) },
    })
  }

  function handleChangeEnumValues(valueString: string): void {
    formDispatch({
      type: FORM_ACTIONS.CHNAGE_ENUM_FIELD,
      payload: { values: EnumField.transformString(valueString) },
    })
  }

  function handleChangeSequenceStartsWith(value: number): void {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD,
      payload: { startsWith: value, step: (field.dataType as SequenceDataType).step },
    })
  }

  function handleChangeSequenceStep(value: number): void {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD,
      payload: { step: value, startsWith: (field.dataType as SequenceDataType).startsWith },
    })
  }

  function handleChangeRef(ref: string): void {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_REF_DATATYPE,
      payload: { ref: ref.split(".") },
    })
  }

  return {
    field,
    handleChangeIsArray,
    handleChangeName,
    handleChangeMaxIsArray,
    handleChangeMinIsArray,
    handleChangePossibleNull,
    handleChangePossibleNullValue,
    handleChangeDataType,
    handleSelectFieldSchema,
    handleSelectFieldSchemaOption,
    handleUpdateCustomField,
    handleUpdateRefField,
    handleUpdateFieldSchemaArguments,
    handleChangeIsKey,
    handleChangeSequentialValues,
    handleChangeEnumValues,
    handleChangeSequenceStartsWith,
    handleChangeSequenceStep,
    handleChangeRef,
  }
}
