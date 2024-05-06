import { DATA_TYPES } from "@modules/schemas/constants"
import {
  CustomDataType,
  EnumDataType,
  MixedDataType,
  PickDataType,
  ProbabilityDataType,
  RefDataType,
  SequenceDataType,
  SequentialDataType,
  SingleValueDataType,
} from "../interfaces/dataset-field"
import { useSchemas } from "@modules/schemas/hooks"
import { useDatasets } from "./"
import { ARRAY_VALUE_TYPE } from "../constants"
import { Datatype } from "../domain/types"

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
    where: null,
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

  const DEFAULT_PICK_DATA_TYPE: PickDataType = {
    type: DATA_TYPES.PICK,
    count: 1,
    values: [{ type: ARRAY_VALUE_TYPE.STRING, value: "" }],
  }

  const DEFAULT_PROBABILITY_DATA_TYPE: ProbabilityDataType = {
    type: DATA_TYPES.PROBABILITY,
    values: [
      {
        chance: { type: ARRAY_VALUE_TYPE.NUMBER, value: "" },
        value: { type: ARRAY_VALUE_TYPE.STRING, value: "" },
      },
    ],
  }

  const DATA_TYPES_ARRAY: Datatype[] = [
    {
      default: DEFAULT_SCHEMA_VALUE_DATA_TYPE,
      title: "Schema Value",
      condition: schemas.length > 0,
      id: "schema-value-field",
    },
    {
      title: "Custom",
      default: DEFAULT_CUSTOM_DATA_TYPE,
      condition: true,
      id: "custom-field",
    },
    {
      title: "Enum",
      default: DEFAULT_ENUM_DATA_TYPE,
      condition: true,
      id: "enum-field",
    },
    {
      title: "Object",
      default: DEFAULT_MIXED_DATA_TYPE,
      condition: true,
      id: "mixed-field",
    },
    {
      title: "Reference",
      default: DEFAULT_REF_DATA_TYPE,
      condition: searchPossibleFieldsToRef({ datasetId: datasetId, fieldId: fieldId }).length !== 0,
      id: "ref-field",
    },
    {
      title: "Sequence",
      default: DEFAULT_SEQUENCE_DATA_TYPE,
      condition: true,
      id: "sequence-field",
    },
    {
      title: "Sequential",
      default: DEFAULT_SEQUENTIAL_DATA_TYPE,
      condition: true,
      id: "sequential-field",
    },
    {
      condition: true,
      default: DEFAULT_PROBABILITY_DATA_TYPE,
      title: "Probability",
      id: "probability-field",
    },
    {
      condition: true,
      default: DEFAULT_PICK_DATA_TYPE,
      title: "Pick",
      id: "pick-field",
    },
  ]

  return {
    DEFAULT_CUSTOM_DATA_TYPE,
    DEFAULT_ENUM_DATA_TYPE,
    DEFAULT_MIXED_DATA_TYPE,
    DEFAULT_REF_DATA_TYPE,
    DEFAULT_SCHEMA_VALUE_DATA_TYPE,
    DEFAULT_SEQUENCE_DATA_TYPE,
    DEFAULT_SEQUENTIAL_DATA_TYPE,
    DATA_TYPES_ARRAY,
  }
}
