import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { NodeProps, SearchProps } from "@modules/datasets/interfaces/tree.interface"
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
  ExportMixedDataType,
  ExportDatatype,
} from "@modules/datasets/interfaces/dataset_field.interface"
import { FieldName } from "@modules/datasets/value-object"
import { NodeObjectUtils } from "./NodeObjectUtils"
import { v4 as uuid } from "uuid"
import { ExportDatasetField } from "@modules/datasets/dto/dataset"

export abstract class FieldNode<T, E extends ExportDatatype> {
  private _dataType: T
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig
  private _name: FieldName
  private _id = uuid()

  public abstract stringInf(props: SearchProps): string

  constructor({ name, dataType, isArray = null, isKey = false, isPossibleNull = 0 }: NodeProps<T>) {
    this._name = name
    this._dataType = dataType
    this._isArray = isArray
    this._possibleNull = isPossibleNull
    this._isKey = isKey
  }

  public abstract exportObject(props: SearchProps): ExportDatasetField<E>

  public static create(props: NodeProps<FieldDataType>): FieldNode<FieldDataType, ExportDatatype> {
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
        dataType: this.dataType,
        isArray: this.isArray,
        isKey: this.isKey,
        isPossibleNull: this._possibleNull,
      }
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

  public setIsKey(v: boolean): void {
    this._isKey = v
  }
}

export class SchemaValueNode extends FieldNode<SingleValueDataType, SingleValueDataType> {
  public stringInf({ findOption, findParent }: SearchProps): string {
    const schema = this.dataType.fieldType.schema
    const option = this.dataType.fieldType.option

    const module = findParent(schema)
    const moduleOption = findOption(schema, option)

    return `${module.showName}.${moduleOption.showName}`
  }

  public exportObject({
    findOption,
    findParent,
  }: SearchProps): ExportDatasetField<SingleValueDataType> {
    const schemaId = this.dataType.fieldType.schema
    const optionId = this.dataType.fieldType.option

    const module = findParent(schemaId)
    const option = findOption(schemaId, optionId)

    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          args: this.dataType.fieldType.args,
          option: option.name,
          schema: module.name,
        },
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class SequenceNode extends FieldNode<SequenceDataType, SequenceDataType> {
  public stringInf(): string {
    return `sequence`
  }

  public exportObject(): ExportDatasetField<SequenceDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class SequentialNode extends FieldNode<SequentialDataType, SequentialDataType> {
  public stringInf(): string {
    return `sequential`
  }

  public exportObject(): ExportDatasetField<SequentialDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class MixedNode extends FieldNode<MixedDataType, ExportMixedDataType> {
  public nodesUtils = new NodeObjectUtils(this)

  public stringInf(): string {
    return `mixed`
  }

  public exportObject(props: SearchProps): ExportDatasetField<ExportMixedDataType> {
    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.MIXED,
        object: this.nodesUtils.exportFields(props),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class RefNode extends FieldNode<RefDataType, RefDataType> {
  public stringInf(): string {
    return `ref`
  }

  public exportObject(): ExportDatasetField<RefDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class CustomNode extends FieldNode<CustomDataType, CustomDataType> {
  public stringInf(): string {
    return `custom`
  }

  public exportObject(): ExportDatasetField<CustomDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class EnumNode extends FieldNode<EnumDataType, EnumDataType> {
  public stringInf(): string {
    return `enum`
  }

  public exportObject(): ExportDatasetField<EnumDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
