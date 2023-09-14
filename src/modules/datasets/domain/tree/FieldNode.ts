import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { NodeProps } from "@modules/datasets/interfaces/tree.interface"
import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/datasets/interfaces/field_config.interface"
import {
  MixedDataType,
  RefDataType,
  SequenceDataType,
  SequentialDataType,
  CustomDataType,
  EnumDataType,
  SingleValueDataType,
} from "@modules/datasets/interfaces/dataset_field.interface"
import { FieldName } from "@modules/datasets/value-object"
import { NodeObjectUtils } from "./NodeObjectUtils"
import { v4 as uuid } from "uuid"

export abstract class FieldNode<T = FieldDataType> {
  private _dataType: T
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig
  private _name: FieldName
  private _id = uuid()

  public abstract stringInf(): string

  constructor({ name, dataType, isArray = null, isKey = false, isPossibleNull = 0 }: NodeProps<T>) {
    this._name = name
    this._dataType = dataType
    this._isArray = isArray
    this._possibleNull = isPossibleNull
    this._isKey = isKey
  }

  public static create(props: NodeProps<FieldDataType>): FieldNode {
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
    } else {
      throw Error("Incorrect data type for node")
    }
  }

  get id() {
    return this._id
  }

  public get name() {
    return this._name.value()
  }

  public get dataType() {
    return this._dataType
  }

  public get isArray() {
    return this._isArray
  }

  public get isPossibleNull() {
    return this._possibleNull
  }

  public get isKey() {
    return this._isKey
  }

  public setIsArray(config: IsArrayConfig): void {
    this._isArray = config
  }

  public setIsPossibleNull(config: PossibleNullConfig): void {
    this._possibleNull = config
  }

  public setName(name: FieldName) {
    this._name = name
  }

  public object(): DatasetField<T> {
    if (this instanceof MixedNode) {
      return {
        id: this.id,
        name: this.name,
        dataType: {
          object: this.nodesUtils.nodes.map((el) => el.object()),
          type: DATA_TYPES.MIXED,
        },
        isArray: this._isArray,
        isKey: this._isKey,
      } as DatasetField<T>
    } else {
      return {
        id: this.id,
        name: this.name,
        dataType: this._dataType,
        isArray: this._isArray,
        isKey: this._isKey,
        isPossibleNull: this._possibleNull,
      }
    }
  }
}

export class SchemaValueNode extends FieldNode<SingleValueDataType> {
  public stringInf(): string {
    const module = this.dataType.fieldType.schema
    const option = this.dataType.fieldType.option

    return `${module}.${option}`
  }
}

export class SequenceNode extends FieldNode<SequenceDataType> {
  public stringInf(): string {
    return `sequence`
  }
}

export class SequentialNode extends FieldNode<SequentialDataType> {
  public stringInf(): string {
    return `sequential`
  }
}

export class MixedNode extends FieldNode<MixedDataType> {
  public nodesUtils = new NodeObjectUtils(this)

  public stringInf(): string {
    return `mixed`
  }
}

export class RefNode extends FieldNode<RefDataType> {
  public stringInf(): string {
    return `ref`
  }
}

export class CustomNode extends FieldNode<CustomDataType> {
  public stringInf(): string {
    return `custom`
  }
}

export class EnumNode extends FieldNode<EnumDataType> {
  public stringInf(): string {
    return `enum`
  }
}
