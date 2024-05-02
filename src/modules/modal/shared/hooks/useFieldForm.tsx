import { useDatatypes } from "@modules/datasets/hooks"
import { useReducer, Reducer } from "react"
import { FieldFormPayload, fieldFormReducer } from "../reducer"
import { FORM_ACTIONS } from "../constants"
import { ARGUMENT_TYPE, DATA_TYPES } from "@modules/schemas/constants"
import { useSchemas } from "@modules/schemas/hooks"
import {
  ArrayValue,
  PickDataType,
  ProbabilityValue,
  RefDataType,
  RefWhere,
  SequenceDataType,
  SingleValueDataType,
} from "@modules/datasets/interfaces/dataset-field"
import {
  ChangeSequentialFieldProps,
  FieldActions,
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
  UpdateRefProps,
} from "../interfaces"
import { FieldForm } from "@modules/modal/interfaces"
import { Argument } from "@modules/schemas/interfaces/argument"

interface Props {
  field: FieldForm
  datasetId: string
}

export default function useFieldForm({ field: ifield, datasetId }: Props): FieldActions {
  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId: ifield.id, datasetId: datasetId })
  const [field, formDispatch] = useReducer<Reducer<FieldForm, FieldFormPayload>>(
    fieldFormReducer,
    ifield,
  )
  const { findParent } = useSchemas()

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

  function handleChangeDataType(id: string) {
    const foundDataType = DATA_TYPES_ARRAY.find((d) => d.id === id)

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

  function handleSelectFieldSchemaOption({ option, parent }: SelectFieldSchemaOptionProps) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            schema: parent,
            option: option,
          },
        },
      },
    })
  }

  function handleAddFieldSchemaArgument(argument: Argument): void {
    let value: unknown
    switch (argument.inputType) {
      case ARGUMENT_TYPE.BOOLEAN:
        value = true
        break
      case ARGUMENT_TYPE.DATE:
        value = new Date()
        break
      case ARGUMENT_TYPE.FLOAT:
        value = 1.0
        break
      case ARGUMENT_TYPE.NUMBER:
        value = 1
        break
      case ARGUMENT_TYPE.SELECT: {
        const options = argument.selectValues as string[]
        value = options[0]
        break
      }
      case ARGUMENT_TYPE.TEXT:
        value = ""
        break
      default:
        value = ""
        break
    }

    handleUpdateFieldSchemaArguments({ argumentName: argument.argument, value: value })
  }

  function handleDeleteFieldSchemaArgument(argument: string) {
    const dataType = field.dataType as SingleValueDataType

    let newArguments = {}
    Object.entries(dataType.fieldType.args).forEach(([key, value]) => {
      if (key !== argument) {
        newArguments = { ...newArguments, [key]: value }
      }
    })

    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            ...dataType.fieldType,
            args: newArguments,
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

  function handleUpdateRefField({ currentfieldId, currentLocation }: UpdateRefProps) {
    const f = field.dataType as RefDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        dataType: {
          type: DATA_TYPES.REF,
          ref: [...currentLocation, currentfieldId],
          unique: f.unique,
          where: f.where,
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

  function handleChangeSequentialValues(props: ChangeSequentialFieldProps): void {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENTIAL_FIELD,
      payload: { values: props.values, loop: props.loop },
    })
  }

  function handleChangeEnumValues(values: ArrayValue[]): void {
    formDispatch({
      type: FORM_ACTIONS.CHNAGE_ENUM_FIELD,
      payload: { values: values },
    })
  }

  function handleChangeSequenceStartsWith(value: number): void {
    const f = field.dataType as SequenceDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD,
      payload: { startsWith: value, step: f.step },
    })
  }

  function handleChangeSequenceStep(value: number): void {
    const f = field.dataType as SequenceDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD,
      payload: { step: value, startsWith: f.startsWith },
    })
  }

  function handleChangeRef(ref: string): void {
    const f = field.dataType as RefDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_REF_DATATYPE,
      payload: { ref: ref.split("."), unique: f.unique, where: f.where },
    })
  }

  function handleChangePickValues(values: ArrayValue[]) {
    const f = field.dataType as PickDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_PICK_DATATYPE,
      payload: { values: values, count: f.count },
    })
  }

  function handleChangePickCount(count: number) {
    const f = field.dataType as PickDataType

    formDispatch({
      type: FORM_ACTIONS.CHANGE_PICK_DATATYPE,
      payload: { values: f.values, count: count },
    })
  }

  function handleChangeProbabilityValues(values: ProbabilityValue[]) {
    formDispatch({ type: FORM_ACTIONS.CHANGE_PROBABILITY_DATATYPE, payload: { values: values } })
  }

  function handleChangeRefUnique(value: boolean) {
    const f = field.dataType as RefDataType

    formDispatch({ type: FORM_ACTIONS.CHANGE_REF_DATATYPE, payload: { ...f, unique: value } })
  }

  function handleChangeRefWhere(value: RefWhere): void {
    const f = field.dataType as RefDataType

    formDispatch({ type: FORM_ACTIONS.CHANGE_REF_DATATYPE, payload: { ...f, where: value } })
  }

  return {
    field,
    handleChangeProbabilityValues,
    handleChangePickValues,
    handleChangePickCount,
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
    handleAddFieldSchemaArgument,
    handleDeleteFieldSchemaArgument,
    handleChangeRefUnique,
    handleChangeRefWhere,
  }
}
