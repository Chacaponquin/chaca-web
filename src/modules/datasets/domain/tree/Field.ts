import { DATA_TYPES } from "@modules/schemas/constants"
import { NodeProps, SearchProps, StringInfProps } from "@modules/datasets/interfaces/tree"
import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/datasets/interfaces/field-config"
import {
  ArgumentObject,
  ArrayValue,
  CustomDataType,
  EnumDataType,
  FieldDataType,
  MixedDataType,
  PickDataType,
  ProbabilityDataType,
  ProbabilityValue,
  RefDataType,
  RefWhere,
  SequenceDataType,
  SequentialDataType,
  SingleValueDataType,
} from "@modules/datasets/interfaces/dataset-field"
import { v4 as uuid } from "uuid"
import {
  ExportCustomDataType,
  ExportDatatypeDTO,
  ExportEnumDataType,
  ExportMixedDataType,
  ExportPickDataType,
  ExportProbabilityDataType,
  ExportRefDataType,
  ExportSequenceDataType,
  ExportSequentialDataType,
  ExportSingleValueDataType,
} from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import {
  EmptyEnumFieldError,
  EmptyRefFieldError,
  EmptySequentialFieldError,
} from "@modules/datasets/errors"
import { ValueMapper } from "./ValueMapper"
import { NodesUtils } from "./NodesUtils"

interface PossibleConfigProps {
  type: DATA_TYPES
  isKey: boolean
}

type Props = {
  name: string
  isPossibleNull?: number
  isArray?: IsArrayConfig
  isKey?: IsKeyConfig
}

type SchemaValueProps = Props & { schema: string; option: string; args: ArgumentObject }

type SequenceValueProps = Props & { startsWith: number; step: number }

type EnumValueProps = Props & { values: ArrayValue[] }

type SequentialValueProps = Props & { values: ArrayValue[]; loop: boolean }

type ProbabilityValueProps = Props & { values: ProbabilityValue[] }

type PickValueProps = Props & { count: number; values: ArrayValue[] }

type CustomValueProps = Props & { code: string }

type MixedValueProps = Props & { object: Field<ExportDatatypeDTO>[] }

type RefValueProps = Props & { ref: string[]; unique: boolean; where: RefWhere }

export abstract class Field<E extends ExportDatatypeDTO> {
  private _id = uuid()
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig
  private _name: string

  constructor({ name, isArray = null, isKey = false, isPossibleNull = 0 }: Props) {
    this._name = name
    this._isArray = isArray
    this._possibleNull = isPossibleNull
    this._isKey = isKey
  }

  abstract exportObject(props: SearchProps): ExportDatasetFieldDTO<E>
  abstract stringInf(props: StringInfProps): string
  abstract clone(): Field<E>
  abstract dataType(): FieldDataType

  protected getRouteString(route: string[]): string {
    return [...route, this.name].join(".")
  }

  static possibleConfig({ isKey, type }: PossibleConfigProps) {
    const canBeKey =
      type === DATA_TYPES.CUSTOM ||
      type === DATA_TYPES.REF ||
      type === DATA_TYPES.SINGLE_VALUE ||
      type === DATA_TYPES.SEQUENCE
    const canBeArray = type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !isKey
    const canBeNull = type !== DATA_TYPES.SEQUENCE && !isKey

    return { canBeArray, canBeKey, canBeNull }
  }

  static create(props: NodeProps): Field<ExportDatatypeDTO> {
    if (props.dataType.type === DATA_TYPES.SINGLE_VALUE) {
      return new SchemaValueNode({
        ...props,
        option: props.dataType.fieldType.option,
        schema: props.dataType.fieldType.schema,
        args: props.dataType.fieldType.args,
      })
    } else if (props.dataType.type === DATA_TYPES.CUSTOM) {
      return new CustomNode({ ...props, code: props.dataType.code })
    } else if (props.dataType.type === DATA_TYPES.ENUM) {
      return new EnumNode({ ...props, values: props.dataType.values })
    } else if (props.dataType.type === DATA_TYPES.MIXED) {
      return new MixedNode({ ...props, object: props.dataType.object })
    } else if (props.dataType.type === DATA_TYPES.REF) {
      return new RefNode({
        ...props,
        ref: props.dataType.ref,
        unique: props.dataType.unique,
        where: props.dataType.where,
      })
    } else if (props.dataType.type === DATA_TYPES.SEQUENCE) {
      return new SequenceNode({
        ...props,
        startsWith: props.dataType.startsWith,
        step: props.dataType.step,
      })
    } else if (props.dataType.type === DATA_TYPES.SEQUENTIAL) {
      return new SequentialNode({
        ...props,
        values: props.dataType.values,
        loop: props.dataType.loop,
      })
    } else if (props.dataType.type === DATA_TYPES.PICK) {
      return new PickNode({ ...props, values: props.dataType.values, count: props.dataType.count })
    } else if (props.dataType.type === DATA_TYPES.PROBABILITY) {
      return new ProbabilityNode({ ...props, values: props.dataType.values })
    } else {
      throw Error("Incorrect data type for node")
    }
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
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

  setId(id: string) {
    this._id = id
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
}

export class SchemaValueNode extends Field<ExportSingleValueDataType> {
  schema: string
  option: string
  args: ArgumentObject

  constructor(props: SchemaValueProps) {
    super(props)
    this.schema = props.schema
    this.option = props.option
    this.args = props.args
  }

  stringInf({ findOption, findParent }: SearchProps): string {
    const module = findParent(this.schema)
    const moduleOption = findOption(this.schema, this.option)

    return `${module.showName}.${moduleOption.showName}`
  }

  clone(): Field<ExportSingleValueDataType> {
    return new SchemaValueNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      option: this.option,
      schema: this.schema,
      args: this.args,
    })
  }

  dataType(): SingleValueDataType {
    return {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        args: this.args,
        option: this.option,
        schema: this.schema,
      },
    }
  }

  exportObject({
    findParent,
    findOption,
  }: SearchProps): ExportDatasetFieldDTO<ExportSingleValueDataType> {
    const schemaId = this.schema
    const optionId = this.option

    const module = findParent(schemaId)
    const option = findOption(schemaId, optionId)

    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: { args: this.args, option: option.name, schema: module.name },
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class SequenceNode extends Field<ExportSequenceDataType> {
  startsWith: number
  step: number

  constructor(props: SequenceValueProps) {
    super(props)
    this.startsWith = props.startsWith
    this.step = props.step
  }

  stringInf(): string {
    return `sequence`
  }

  dataType(): SequenceDataType {
    return { type: DATA_TYPES.SEQUENCE, startsWith: this.startsWith, step: this.step }
  }

  clone(): Field<ExportSequenceDataType> {
    return new SequenceNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      startsWith: this.startsWith,
      step: this.step,
    })
  }

  exportObject(): ExportDatasetFieldDTO<ExportSequenceDataType> {
    return {
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      dataType: this.dataType(),
    }
  }
}

export class SequentialNode extends Field<ExportSequentialDataType> {
  values: ArrayValue[]
  loop: boolean

  constructor(props: SequentialValueProps) {
    super(props)
    this.values = props.values
    this.loop = props.loop
  }

  stringInf(): string {
    return `sequential`
  }

  clone(): Field<ExportSequentialDataType> {
    return new SequentialNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      values: this.values,
      loop: this.loop,
    })
  }

  dataType(): SequentialDataType {
    return {
      type: DATA_TYPES.SEQUENTIAL,
      values: this.values,
      loop: this.loop,
    }
  }

  exportObject(props: SearchProps): ExportDatasetFieldDTO<ExportSequentialDataType> {
    if (this.values.length === 0) {
      throw new EmptySequentialFieldError(this.getRouteString(props.fieldRoute))
    }

    const mapper = new ValueMapper()

    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.SEQUENTIAL,
        values: this.values.map((v) => mapper.map(v)),
        loop: this.loop,
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class RefNode extends Field<ExportRefDataType> {
  ref: string[]
  unique: boolean
  where: RefWhere

  constructor(props: RefValueProps) {
    super(props)
    this.ref = props.ref
    this.unique = props.unique
    this.where = props.where
  }

  dataType(): RefDataType {
    return {
      type: DATA_TYPES.REF,
      ref: this.ref,
      unique: this.unique,
      where: this.where,
    }
  }

  stringInf(): string {
    return `ref`
  }

  clone(): Field<ExportRefDataType> {
    return new RefNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      ref: this.ref,
      unique: this.unique,
      where: this.where,
    })
  }

  exportObject({ searchRefField }: SearchProps): ExportDatasetFieldDTO<ExportRefDataType> {
    const locationNames = searchRefField(this.ref)

    if (this.ref.length > 1) {
      return {
        name: this.name,
        dataType: {
          type: DATA_TYPES.REF,
          ref: locationNames.join("."),
          unique: this.unique,
          where: this.where,
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

export class EnumNode extends Field<ExportEnumDataType> {
  values: ArrayValue[]

  constructor(props: EnumValueProps) {
    super(props)
    this.values = props.values
  }

  stringInf(): string {
    return `enum`
  }

  dataType(): EnumDataType {
    return {
      type: DATA_TYPES.ENUM,
      values: this.values,
    }
  }

  clone(): Field<ExportEnumDataType> {
    return new EnumNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      values: this.values,
    })
  }

  exportObject(props: SearchProps): ExportDatasetFieldDTO<ExportEnumDataType> {
    if (this.values.length === 0) {
      throw new EmptyEnumFieldError(this.getRouteString(props.fieldRoute))
    }

    const mapper = new ValueMapper()

    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.ENUM,
        values: this.values.map((v) => mapper.map(v)),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class CustomNode extends Field<ExportCustomDataType> {
  code: string

  constructor(props: CustomValueProps) {
    super(props)
    this.code = props.code
  }

  stringInf(): string {
    return `custom`
  }

  dataType(): CustomDataType {
    return { type: DATA_TYPES.CUSTOM, code: this.code }
  }

  clone(): Field<ExportCustomDataType> {
    return new CustomNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      code: this.code,
    })
  }

  exportObject(): ExportDatasetFieldDTO<ExportCustomDataType> {
    return {
      name: this.name,
      dataType: { type: DATA_TYPES.CUSTOM, code: this.code },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class PickNode extends Field<ExportPickDataType> {
  static MIN_COUNT_VALUE = 0

  values: ArrayValue[]
  count: number

  constructor(props: PickValueProps) {
    super(props)
    this.values = props.values
    this.count = props.count
  }

  stringInf(): string {
    return `pick`
  }

  dataType(): PickDataType {
    return {
      count: this.count,
      type: DATA_TYPES.PICK,
      values: this.values,
    }
  }

  clone(): Field<ExportPickDataType> {
    return new PickNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      values: this.values,
      count: this.count,
    })
  }

  public exportObject(): ExportDatasetFieldDTO<ExportPickDataType> {
    const mapper = new ValueMapper()

    return {
      name: this.name,
      dataType: {
        count: this.count,
        type: DATA_TYPES.PICK,
        values: this.values.map((v) => mapper.map(v)),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class MixedNode extends Field<ExportMixedDataType> {
  readonly utils = new NodesUtils(this)

  constructor(props: MixedValueProps) {
    super(props)
    props.object.map((f) => this.utils.insertNode(f))
  }

  get nodes() {
    return this.utils.nodes
  }

  dataType(): MixedDataType {
    return {
      type: DATA_TYPES.MIXED,
      object: this.utils.nodes,
    }
  }

  stringInf(): string {
    return `mixed`
  }

  clone(): Field<ExportMixedDataType> {
    const node = new MixedNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      object: this.utils.nodes,
    })

    const newNodes = this.utils.nodes.map((n) => n.clone())

    newNodes.forEach((n) => node.utils.insertNode(n))

    return node
  }

  exportObject(props: SearchProps): ExportDatasetFieldDTO<ExportMixedDataType> {
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

export class ProbabilityNode extends Field<ExportProbabilityDataType> {
  values: ProbabilityValue[]

  constructor(props: ProbabilityValueProps) {
    super(props)
    this.values = props.values
  }

  stringInf(): string {
    return `probability`
  }

  dataType(): ProbabilityDataType {
    return {
      type: DATA_TYPES.PROBABILITY,
      values: this.values,
    }
  }

  clone(): Field<ExportProbabilityDataType> {
    return new ProbabilityNode({
      name: this.name,
      values: this.values,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    })
  }

  exportObject(): ExportDatasetFieldDTO<ExportProbabilityDataType> {
    const mapper = new ValueMapper()

    return {
      name: this.name,
      isArray: this.isArray,
      isPossibleNull: this.isPossibleNull,
      isKey: this.isKey,
      dataType: {
        type: DATA_TYPES.PROBABILITY,
        values: this.values.map((v) => {
          return { chance: mapper.map(v.chance), value: mapper.map(v.value) }
        }),
      },
    }
  }
}
