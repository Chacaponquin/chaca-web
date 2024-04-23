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
  ExportMixedDataType,
  ExportDatatype,
  ExportRefDataType,
} from "@modules/datasets/interfaces/dataset-field"
import { FieldName } from "@modules/datasets/value-object"
import { NodesUtils } from "./NodesUtils"
import { v4 as uuid } from "uuid"
import { ExportDatasetField } from "@modules/datasets/dto/dataset"
import {
  EmptyEnumFieldError,
  EmptyRefFieldError,
  EmptySequentialFieldError,
} from "@modules/datasets/errors"

interface PossibleConfigProps {
  type: DATA_TYPES
  isKey: boolean
}

export abstract class Field<T, E extends ExportDatatype> {
  readonly id = uuid()
  private _dataType: T
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig
  private _name: FieldName

  constructor({ name, dataType, isArray = null, isKey = false, isPossibleNull = 0 }: NodeProps<T>) {
    this._name = name
    this._dataType = dataType
    this._isArray = isArray
    this._possibleNull = isPossibleNull
    this._isKey = isKey
  }

  public abstract exportObject(props: SearchProps): ExportDatasetField<E>
  public abstract stringInf(props: StringInfProps): string

  protected getRouteString(route: Array<string>): string {
    return [...route, this.name].join(".")
  }

  public static possibleConfig({ isKey, type }: PossibleConfigProps) {
    const canBeKey =
      type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.MIXED && type !== DATA_TYPES.ENUM
    const canBeArray = type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !isKey
    const canBeNull = type !== DATA_TYPES.SEQUENCE && !isKey

    return { canBeArray, canBeKey, canBeNull }
  }

  public static create(props: NodeProps<FieldDataType>): Field<FieldDataType, ExportDatatype> {
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

  public setDatatype(datatype: T): void {
    this._dataType = datatype
  }
}

export class SchemaValueNode extends Field<SingleValueDataType, SingleValueDataType> {
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

export class SequenceNode extends Field<SequenceDataType, SequenceDataType> {
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

export class SequentialNode extends Field<SequentialDataType, SequentialDataType> {
  public stringInf(): string {
    return `sequential`
  }

  public exportObject(props: SearchProps): ExportDatasetField<SequentialDataType> {
    if (this.dataType.values.length === 0) {
      throw new EmptySequentialFieldError(this.getRouteString(props.fieldRoute))
    }

    return {
      name: this.name,
      dataType: {
        ...this.dataType,
        values: this.dataType.values.map((v) => v.trim()).filter((v) => v !== ""),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class MixedNode extends Field<MixedDataType, ExportMixedDataType> {
  readonly utils = new NodesUtils(this)

  public stringInf(): string {
    return `mixed`
  }

  public exportObject(props: SearchProps): ExportDatasetField<ExportMixedDataType> {
    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.MIXED,
        object: this.utils.exportFields(props),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class RefNode extends Field<RefDataType, ExportRefDataType> {
  public stringInf(): string {
    return `ref`
  }

  public exportObject({ searchRefField }: SearchProps): ExportDatasetField<ExportRefDataType> {
    if (this.dataType.ref.length > 1) {
      const locationNames = searchRefField(this.dataType.ref)

      return {
        name: this.name,
        dataType: {
          type: DATA_TYPES.REF,
          ref: locationNames.join("."),
        },
        isArray: this.isArray,
        isKey: this.isKey,
        isPossibleNull: this.isPossibleNull,
      }
    } else {
      throw new EmptyRefFieldError()
    }
  }
}

export class CustomNode extends Field<CustomDataType, CustomDataType> {
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

export class EnumNode extends Field<EnumDataType, EnumDataType> {
  public stringInf(): string {
    return `enum`
  }

  public exportObject(props: SearchProps): ExportDatasetField<EnumDataType> {
    if (this.dataType.values.length === 0) {
      throw new EmptyEnumFieldError(this.getRouteString(props.fieldRoute))
    }

    return {
      name: this.name,
      dataType: {
        ...this.dataType,
        values: this.dataType.values.map((v) => v.trim()).filter((v) => v !== ""),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
