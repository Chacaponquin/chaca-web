import { DATA_TYPES } from "@modules/schemas/constants"
import {
  CustomDataType,
  EnumDataType,
  MixedDataType,
  RefDataType,
  SequenceDataType,
  SequentialDataType,
  SingleValueDataType,
} from "../interfaces/dataset-field"
import { useSchemas } from "@modules/schemas/hooks"
import { Datatype } from "../dto/field"
import { useDatasets } from "./"
import { ARRAY_VALUE_TYPE } from "../constants"

interface Props {
  fieldId: string
  datasetId: string
}

export default function useDatatypes({ fieldId, datasetId }: Props) {
  const { schemas } = useSchemas()
  const { searchPossibleFieldsToRef } = useDatasets()

  const DEFAULT_CUSTOM_DATA_TYPE: CustomDataType = {
    type: DATA_TYPES.CUSTOM,
    code: `function getValue(props){\n   // logic\n}`,
  }

  const DEFAULT_MIXED_DATA_TYPE: MixedDataType = {
    type: DATA_TYPES.MIXED,
    object: [],
  }

  const DEFAULT_SCHEMA_VALUE_DATA_TYPE: SingleValueDataType = {
    type: DATA_TYPES.SINGLE_VALUE,
    fieldType: { args: {}, schema: schemas[0].id, option: schemas[0].options[0].id },
  }

  const DEFAULT_REF_DATA_TYPE: RefDataType = {
    type: DATA_TYPES.REF,
    ref: [],
    unique: false,
  }

  const DEFAULT_SEQUENCE_DATA_TYPE: SequenceDataType = {
    type: DATA_TYPES.SEQUENCE,
    startsWith: 1,
    step: 1,
  }

  const DEFAULT_SEQUENTIAL_DATA_TYPE: SequentialDataType = {
    type: DATA_TYPES.SEQUENTIAL,
    values: [{ type: ARRAY_VALUE_TYPE.STRING, value: "" }],
    loop: false,
  }

  const DEFAULT_ENUM_DATA_TYPE: EnumDataType = {
    type: DATA_TYPES.ENUM,
    values: [{ type: ARRAY_VALUE_TYPE.STRING, value: "" }],
  }

  const DATA_TYPES_ARRAY: Array<Datatype> = [
    {
      dataType: DATA_TYPES.SINGLE_VALUE,
      title: "Schema Value",
      id: 7,
      default: DEFAULT_SCHEMA_VALUE_DATA_TYPE,
      condition: schemas.length > 0,
    },
    {
      dataType: DATA_TYPES.CUSTOM,
      title: "Custom",
      id: 1,
      default: DEFAULT_CUSTOM_DATA_TYPE,
      condition: true,
    },
    {
      dataType: DATA_TYPES.ENUM,
      title: "Enum",
      id: 2,
      default: DEFAULT_ENUM_DATA_TYPE,
      condition: true,
    },
    {
      dataType: DATA_TYPES.MIXED,
      title: "Object",
      id: 3,
      default: DEFAULT_MIXED_DATA_TYPE,
      condition: true,
    },
    {
      dataType: DATA_TYPES.REF,
      title: "Reference",
      id: 4,
      default: DEFAULT_REF_DATA_TYPE,
      condition: searchPossibleFieldsToRef({ datasetId: datasetId, fieldId: fieldId }).length !== 0,
    },
    {
      dataType: DATA_TYPES.SEQUENCE,
      title: "Sequence",
      id: 5,
      default: DEFAULT_SEQUENCE_DATA_TYPE,
      condition: true,
    },
    {
      dataType: DATA_TYPES.SEQUENTIAL,
      title: "Sequential",
      id: 6,
      default: DEFAULT_SEQUENTIAL_DATA_TYPE,
      condition: true,
    },
  ]

  function foundDataTypeByName(dataType: DATA_TYPES): Datatype {
    const found = DATA_TYPES_ARRAY.find((d) => d.dataType === dataType) as Datatype
    return found
  }

  return {
    DEFAULT_CUSTOM_DATA_TYPE,
    DEFAULT_ENUM_DATA_TYPE,
    DEFAULT_MIXED_DATA_TYPE,
    DEFAULT_REF_DATA_TYPE,
    DEFAULT_SCHEMA_VALUE_DATA_TYPE,
    DEFAULT_SEQUENCE_DATA_TYPE,
    DEFAULT_SEQUENTIAL_DATA_TYPE,
    DATA_TYPES_ARRAY,
    foundDataTypeByName,
  }
}
