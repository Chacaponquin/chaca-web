import { useDatatypes } from "@modules/dataset/hooks"
import { useReducer, Reducer } from "react"
import { FieldFormPayload, fieldFormReducer } from "../reducer"
import { FORM_ACTIONS } from "../constants"
import { ARGUMENT_TYPE, DATA_TYPES } from "@modules/modules/domain/constants"
import {
  ArrayValue,
  PickDatatype,
  ProbabilityValue,
  RefDatatype,
  RefWhere,
  SequenceDatatype,
  ModuleValueDatatype,
} from "@modules/dataset/domain/core/datatype"
import {
  ChangeSequentialFieldProps,
  FieldActions,
  UpdateArgumentsProps,
  UpdateRefProps,
} from "../domain/field"
import { Argument } from "@modules/modules/domain/core/argument"
import { FieldForm } from "@modules/dataset/domain/form"
import { ModuleSection, Module } from "@modules/modules/domain/core/schema"

interface Props {
  field: FieldForm
  schemaId: string
}

export default function useFieldForm({ field: ifield, schemaId }: Props): FieldActions {
  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId: ifield.id, schemaId: schemaId })
  const [field, formDispatch] = useReducer<Reducer<FieldForm, FieldFormPayload>>(
    fieldFormReducer,
    ifield,
  )

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
    if (max !== null && field.isArray) {
      formDispatch({
        type: FORM_ACTIONS.CHANGE_ARRAY_LIMITS,
        payload: { max: max, min: field.isArray.min },
      })
    }
  }

  function handleChangeMinIsArray(min: number | null) {
    if (min !== null && field.isArray) {
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

  function handleChangeDatatype(id: string) {
    const foundDatatype = DATA_TYPES_ARRAY.find((d) => d.id === id)

    if (foundDatatype) {
      formDispatch({
        type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
        payload: { datatype: foundDatatype.default },
      })

      resetForm()
    }
  }

  function handleSelectModuleSection(parent: ModuleSection) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_MODULE_SECTION,
      payload: {
        schema: parent,
      },
    })
  }

  function handleSelectModule(option: Module) {
    formDispatch({
      type: FORM_ACTIONS.CHANGE_MODULE,
      payload: {
        option: option,
      },
    })
  }

  function handleAddFieldSchemaArgument(argument: Argument): void {
    let value: unknown

    switch (argument.config.type) {
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
        const options = argument.config.values
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

    handleUpdateFieldSchemaArguments({ name: argument.argument, value: value })
  }

  function handleDeleteFieldSchemaArgument(argument: string) {
    const datatype = field.datatype as ModuleValueDatatype

    let newArguments = {}
    Object.entries(datatype.args).forEach(([key, value]) => {
      if (key !== argument) {
        newArguments = { ...newArguments, [key]: value }
      }
    })

    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datatype: {
          type: DATA_TYPES.MODULE_VALUE,
          module: datatype.module,
          section: datatype.section,
          args: newArguments,
        },
      },
    })
  }

  function handleUpdateFieldSchemaArguments({ name, value }: UpdateArgumentsProps) {
    const datatype = field.datatype as ModuleValueDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datatype: {
          type: DATA_TYPES.MODULE_VALUE,
          args: { ...datatype.args, [name]: value },
          module: datatype.module,
          section: datatype.section,
        },
      },
    })
  }

  function handleUpdateRefField({ currentfieldId, currentLocation }: UpdateRefProps) {
    const f = field.datatype as RefDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datatype: {
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
        datatype: {
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
    const f = field.datatype as SequenceDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD,
      payload: { startsWith: value, step: f.step },
    })
  }

  function handleChangeSequenceStep(value: number): void {
    const f = field.datatype as SequenceDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_SEQUENCE_FIELD,
      payload: { step: value, startsWith: f.startsWith },
    })
  }

  function handleChangeRef(ref: string): void {
    const f = field.datatype as RefDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_REF_DATATYPE,
      payload: { ref: ref.split("."), unique: f.unique, where: f.where },
    })
  }

  function handleChangePickValues(values: ArrayValue[]) {
    const f = field.datatype as PickDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_PICK_DATATYPE,
      payload: { values: values, count: f.count },
    })
  }

  function handleChangePickCount(count: number) {
    const f = field.datatype as PickDatatype

    formDispatch({
      type: FORM_ACTIONS.CHANGE_PICK_DATATYPE,
      payload: { values: f.values, count: count },
    })
  }

  function handleChangeProbabilityValues(values: ProbabilityValue[]) {
    formDispatch({ type: FORM_ACTIONS.CHANGE_PROBABILITY_DATATYPE, payload: { values: values } })
  }

  function handleChangeRefUnique(value: boolean) {
    const f = field.datatype as RefDatatype

    formDispatch({ type: FORM_ACTIONS.CHANGE_REF_DATATYPE, payload: { ...f, unique: value } })
  }

  function handleChangeRefWhere(value: RefWhere): void {
    const f = field.datatype as RefDatatype

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
    handleChangeDatatype,
    handleSelectModuleSection,
    handleSelectModule,
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
