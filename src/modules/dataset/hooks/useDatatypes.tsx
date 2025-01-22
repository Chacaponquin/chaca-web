import { DATA_TYPES } from "@modules/modules/domain/constants"
import {
  CustomDatatype,
  EnumDatatype,
  MixedDatatype,
  PickDatatype,
  ProbabilityDatatype,
  RefDatatype,
  SequenceDatatype,
  SequentialDatatype,
  ModuleValueDatatype,
} from "../domain/core/datatype"
import { useDataset } from "./"
import { ARRAY_VALUE_TYPE, DatasetFunctions } from "../domain/constants"
import { Datatype } from "../domain/data-types"
import useModules from "@modules/modules/hooks/useModules"

interface Props {
  fieldId: string
  schemaId: string
}

export default function useDatatypes({ fieldId, schemaId }: Props) {
  const { modules } = useModules()
  const { searchPossibleFieldsToRef } = useDataset()

  const DEFAULT_CUSTOM_DATA_TYPE: CustomDatatype = {
    type: DATA_TYPES.CUSTOM,
    code: DatasetFunctions.custom(),
  }

  const DEFAULT_MIXED_DATA_TYPE: MixedDatatype = {
    type: DATA_TYPES.MIXED,
    object: [],
  }

  const DEFAULT_MODULE_VALUE_DATATYPE: ModuleValueDatatype = {
    type: DATA_TYPES.MODULE_VALUE,
    args: {},
    section: modules[0],
    module: modules[0].modules[0],
  }

  const DEFAULT_REF_DATA_TYPE: RefDatatype = {
    type: DATA_TYPES.REF,
    ref: [],
    unique: false,
    where: null,
  }

  const DEFAULT_SEQUENCE_DATA_TYPE: SequenceDatatype = {
    type: DATA_TYPES.SEQUENCE,
    startsWith: 1,
    step: 1,
  }

  const DEFAULT_SEQUENTIAL_DATA_TYPE: SequentialDatatype = {
    type: DATA_TYPES.SEQUENTIAL,
    values: [{ type: ARRAY_VALUE_TYPE.STRING, value: "" }],
    loop: false,
  }

  const DEFAULT_ENUM_DATA_TYPE: EnumDatatype = {
    type: DATA_TYPES.ENUM,
    values: [{ type: ARRAY_VALUE_TYPE.STRING, value: "" }],
  }

  const DEFAULT_PICK_DATA_TYPE: PickDatatype = {
    type: DATA_TYPES.PICK,
    count: 1,
    values: [{ type: ARRAY_VALUE_TYPE.STRING, value: "" }],
  }

  const DEFAULT_PROBABILITY_DATA_TYPE: ProbabilityDatatype = {
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
      default: DEFAULT_MODULE_VALUE_DATATYPE,
      title: "Module Value",
      condition: modules.length > 0,
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
      condition: searchPossibleFieldsToRef({ schemaId: schemaId, fieldId: fieldId }).length !== 0,
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
    DEFAULT_MODULE_VALUE_DATATYPE,
    DEFAULT_SEQUENCE_DATA_TYPE,
    DEFAULT_SEQUENTIAL_DATA_TYPE,
    DATA_TYPES_ARRAY,
  }
}
