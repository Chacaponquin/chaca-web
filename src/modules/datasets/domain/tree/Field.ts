import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets"
import { NodeProps, SearchProps, StringInfProps } from "@modules/datasets/interfaces/tree"
import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/datasets/interfaces/field-config"
import {
  MixedDataType,
  RefDataType,
  SequenceDataType,
  SequentialDataType,
  CustomDataType,
  EnumDataType,
  SingleValueDataType,
  PickDataType,
  ProbabilityDataType,
} from "@modules/datasets/interfaces/dataset-field"
import { v4 as uuid } from "uuid"
import { SchemaValueNode } from "./SchemaValueNode"
import { CustomNode } from "./CustomNode"
import { EnumNode } from "./EnumNode"
import { MixedNode } from "./MixedNode"
import { RefNode } from "./RefNode"
import { SequenceNode } from "./SequenceNode"
import { SequentialNode } from "./SequentialNode"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { PickNode } from "./PickNode"
import { ProbabilityNode } from "./ProbabilityNode"

interface PossibleConfigProps {
  type: DATA_TYPES
  isKey: boolean
}

export abstract class Field<T, E extends ExportDatatypeDTO> {
  readonly id = uuid()
  private _dataType: T
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig
  private _name: string

  constructor({ name, dataType, isArray = null, isKey = false, isPossibleNull = 0 }: NodeProps<T>) {
    this._name = name
    this._dataType = dataType
    this._isArray = isArray
    this._possibleNull = isPossibleNull
    this._isKey = isKey
  }

  public abstract exportObject(props: SearchProps): ExportDatasetFieldDTO<E>
  public abstract stringInf(props: StringInfProps): string

  protected getRouteString(route: string[]): string {
    return [...route, this.name].join(".")
  }

  static possibleConfig({ isKey, type }: PossibleConfigProps) {
    const canBeKey =
      type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.MIXED && type !== DATA_TYPES.ENUM
    const canBeArray = type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !isKey
    const canBeNull = type !== DATA_TYPES.SEQUENCE && !isKey

    return { canBeArray, canBeKey, canBeNull }
  }

  static create(props: NodeProps<FieldDataType>): Field<FieldDataType, ExportDatatypeDTO> {
    if (props.dataType.type === DATA_TYPES.SINGLE_VALUE) {
      return new SchemaValueNode(props as NodeProps<SingleValueDataType>)
    } else if (props.dataType.type === DATA_TYPES.CUSTOM) {
      return new CustomNode(props as NodeProps<CustomDataType>)
    } else if (props.dataType.type === DATA_TYPES.ENUM) {
      return new EnumNode(props as NodeProps<EnumDataType>)
    } else if (props.dataType.type === DATA_TYPES.MIXED) {
      return new MixedNode(props as NodeProps<MixedDataType>)
    } else if (props.dataType.type === DATA_TYPES.REF) {
      return new RefNode(props as NodeProps<RefDataType>)
    } else if (props.dataType.type === DATA_TYPES.SEQUENCE) {
      return new SequenceNode(props as NodeProps<SequenceDataType>)
    } else if (props.dataType.type === DATA_TYPES.SEQUENTIAL) {
      return new SequentialNode(props as NodeProps<SequentialDataType>)
    } else if (props.dataType.type === DATA_TYPES.PICK) {
      return new PickNode(props as NodeProps<PickDataType>)
    } else if (props.dataType.type === DATA_TYPES.PROBABILITY) {
      return new ProbabilityNode(props as NodeProps<ProbabilityDataType>)
    } else {
      throw Error("Incorrect data type for node")
    }
  }

  object(): DatasetField<T> {
    if (this instanceof MixedNode) {
      return {
        id: this.id,
        name: this.name,
        dataType: {
          object: this.utils.nodes.map((el) => el.object()),
          type: DATA_TYPES.MIXED,
        },
        isArray: this.isArray,
        isKey: this.isKey,
      } as DatasetField<T>
    } else {
      return {
        id: this.id,
        name: this.name,
        dataType: this.dataType,
        isArray: this.isArray,
        isKey: this.isKey,
        isPossibleNull: this.isPossibleNull,
      }
    }
  }

  get name() {
    return this._name
  }

  get dataType() {
    return this._dataType
  }

  get isArray() {
    return this._isArray
  }

  get isPossibleNull() {
    return this._possibleNull
  }

  get isKey() {
    return this._isKey
  }

  setIsArray(config: IsArrayConfig): void {
    this._isArray = config
  }

  setIsPossibleNull(config: PossibleNullConfig): void {
    this._possibleNull = config
  }

  setName(name: string) {
    this._name = name
  }

  setIsKey(v: boolean): void {
    this._isKey = v
  }

  setDatatype(datatype: T): void {
    this._dataType = datatype
  }
}
