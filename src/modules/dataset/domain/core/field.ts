import { DATA_TYPES } from "@modules/modules/domain/constants"
import {
  CreateFromSaveProps,
  ExportFieldsProps,
  NodeProps,
  SearchProps,
  StringInfProps,
} from "@modules/dataset/interfaces/dataset"
import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/dataset/domain/core/field-config"
import {
  ArgumentObject,
  ArrayValue,
  CustomDatatype,
  EnumDatatype,
  FieldDatatype,
  MixedDatatype,
  PickDatatype,
  ProbabilityDatatype,
  ProbabilityValue,
  RefDatatype,
  RefWhere,
  SequenceDatatype,
  SequentialDatatype,
  ModuleValueDatatype,
} from "@modules/dataset/domain/core/datatype"
import {
  DatasetError,
  EmptyEnumFieldError,
  EmptyRefFieldError,
  EmptySequentialFieldError,
} from "@modules/dataset/errors/dataset"
import { ValueMapper } from "./mapper"
import { NodesUtils } from "./utils"
import { ModuleSection, Module } from "@modules/modules/domain/core/schema"
import { SaveFieldDTO } from "@modules/dataset/dto/save"
import { ExportDatasetFieldDTO } from "@modules/dataset/dto/export"

interface PossibleConfigProps {
  type: DATA_TYPES
  isKey: boolean
}

type Props = {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
}

type SchemaValueProps = Props & {
  section: ModuleSection
  module: Module
  args: ArgumentObject
}

type SequenceValueProps = Props & { startsWith: number; step: number }

type EnumValueProps = Props & { values: ArrayValue[] }

type SequentialValueProps = Props & { values: ArrayValue[]; loop: boolean }

type ProbabilityValueProps = Props & { values: ProbabilityValue[] }

type PickValueProps = Props & { count: number; values: ArrayValue[] }

type CustomValueProps = Props & { code: string }

type MixedValueProps = Props & { object: Field[] }

type RefValueProps = Props & { ref: string[]; unique: boolean; where: RefWhere }

export abstract class Field {
  static MIN_POSSIBLE_NULL = 0
  static MAX_POSSIBLE_NULL = 100

  private _id: string
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig
  private _name: string

  constructor({ name, isArray, isKey, isPossibleNull, id }: Props) {
    this._name = name
    this._isArray = isArray
    this._possibleNull = isPossibleNull
    this._isKey = isKey
    this._id = id
  }

  abstract export(props: ExportFieldsProps): ExportDatasetFieldDTO | DatasetError
  abstract stringInf(props: StringInfProps): string
  abstract clone(): Field
  abstract save(): SaveFieldDTO
  abstract get datatype(): FieldDatatype

  protected getRouteString(route: string[]): string {
    return [...route, this.name].join(".")
  }

  static possibleConfig({ isKey, type }: PossibleConfigProps) {
    const canBeKey =
      type === DATA_TYPES.CUSTOM ||
      type === DATA_TYPES.REF ||
      type === DATA_TYPES.MODULE_VALUE ||
      type === DATA_TYPES.SEQUENCE
    const canBeArray = type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !isKey
    const canBeNull = type !== DATA_TYPES.SEQUENCE && !isKey

    return { canBeArray, canBeKey, canBeNull }
  }

  static createFromSave({ props, searcher }: CreateFromSaveProps): Field {
    if (props.datatype.type === DATA_TYPES.MODULE_VALUE) {
      const foundSection = searcher.findSection(props.datatype.section)
      const foundModule = searcher.findModule(props.datatype.section, props.datatype.module)

      return new SchemaValueNode({
        ...props,
        module: foundModule,
        section: foundSection,
        args: props.datatype.args,
      })
    } else if (props.datatype.type === DATA_TYPES.CUSTOM) {
      return new CustomNode({ ...props, code: props.datatype.code })
    } else if (props.datatype.type === DATA_TYPES.ENUM) {
      return new EnumNode({ ...props, values: props.datatype.values })
    } else if (props.datatype.type === DATA_TYPES.PICK) {
      return new PickNode({ ...props, values: props.datatype.values, count: props.datatype.count })
    } else if (props.datatype.type === DATA_TYPES.PROBABILITY) {
      return new ProbabilityNode({ ...props, values: props.datatype.values })
    } else if (props.datatype.type === DATA_TYPES.REF) {
      return new RefNode({
        ...props,
        ref: props.datatype.ref,
        unique: props.datatype.unique,
        where: props.datatype.where,
      })
    } else if (props.datatype.type === DATA_TYPES.SEQUENCE) {
      return new SequenceNode({
        ...props,
        startsWith: props.datatype.startsWith,
        step: props.datatype.step,
      })
    } else if (props.datatype.type === DATA_TYPES.SEQUENTIAL) {
      return new SequentialNode({
        ...props,
        loop: props.datatype.loop,
        values: props.datatype.values,
      })
    } else if (props.datatype.type === DATA_TYPES.MIXED) {
      const fields = props.datatype.object.map((o) => {
        return Field.createFromSave({ props: o, searcher: searcher })
      })

      return new MixedNode({ ...props, object: fields })
    } else {
      throw Error("Incorrect data type for node")
    }
  }

  static create(props: NodeProps): Field {
    if (props.datatype.type === DATA_TYPES.MODULE_VALUE) {
      return new SchemaValueNode({
        ...props,
        module: props.datatype.module,
        section: props.datatype.section,
        args: props.datatype.args,
      })
    } else if (props.datatype.type === DATA_TYPES.CUSTOM) {
      return new CustomNode({ ...props, code: props.datatype.code })
    } else if (props.datatype.type === DATA_TYPES.ENUM) {
      return new EnumNode({ ...props, values: props.datatype.values })
    } else if (props.datatype.type === DATA_TYPES.MIXED) {
      const fields = props.datatype.object.map((o) => {
        return Field.create(o)
      })

      return new MixedNode({ ...props, object: fields })
    } else if (props.datatype.type === DATA_TYPES.REF) {
      return new RefNode({
        ...props,
        ref: props.datatype.ref,
        unique: props.datatype.unique,
        where: props.datatype.where,
      })
    } else if (props.datatype.type === DATA_TYPES.SEQUENCE) {
      return new SequenceNode({
        ...props,
        startsWith: props.datatype.startsWith,
        step: props.datatype.step,
      })
    } else if (props.datatype.type === DATA_TYPES.SEQUENTIAL) {
      return new SequentialNode({
        ...props,
        values: props.datatype.values,
        loop: props.datatype.loop,
      })
    } else if (props.datatype.type === DATA_TYPES.PICK) {
      return new PickNode({ ...props, values: props.datatype.values, count: props.datatype.count })
    } else if (props.datatype.type === DATA_TYPES.PROBABILITY) {
      return new ProbabilityNode({ ...props, values: props.datatype.values })
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

export class SchemaValueNode extends Field {
  readonly section: ModuleSection
  readonly module: Module
  readonly args: ArgumentObject

  constructor(props: SchemaValueProps) {
    super(props)
    this.module = props.module
    this.section = props.section
    this.args = props.args
  }

  stringInf(): string {
    return `${this.section.id}.${this.module.id}`
  }

  save(): SaveFieldDTO {
    return {
      datatype: {
        type: DATA_TYPES.MODULE_VALUE,
        args: this.args,
        module: this.module.id,
        section: this.section.id,
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      name: this.name,
      id: this.id,
    }
  }

  clone(): Field {
    return new SchemaValueNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      module: this.module,
      section: this.section,
      args: this.args,
      id: this.id,
    })
  }

  get datatype(): ModuleValueDatatype {
    return {
      type: DATA_TYPES.MODULE_VALUE,
      args: this.args,
      module: this.module,
      section: this.section,
    }
  }

  export(): ExportDatasetFieldDTO {
    return {
      name: this.name,
      datatype: {
        type: DATA_TYPES.MODULE_VALUE,
        args: this.args,
        module: this.module.id,
        section: this.section.id,
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class SequenceNode extends Field {
  static MIN_STARTS_WITH = 0.1
  static MIN_STEP = 0.1

  readonly startsWith: number
  readonly step: number

  constructor(props: SequenceValueProps) {
    super(props)
    this.startsWith = props.startsWith
    this.step = props.step
  }

  stringInf(): string {
    return `sequence`
  }

  save(): SaveFieldDTO {
    return {
      datatype: { type: DATA_TYPES.SEQUENCE, startsWith: this.startsWith, step: this.step },
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }

  get datatype(): SequenceDatatype {
    return { type: DATA_TYPES.SEQUENCE, startsWith: this.startsWith, step: this.step }
  }

  clone(): Field {
    return new SequenceNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      startsWith: this.startsWith,
      step: this.step,
      id: this.id,
    })
  }

  export(): ExportDatasetFieldDTO {
    return {
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }
}

export class SequentialNode extends Field {
  readonly values: ArrayValue[]
  readonly loop: boolean

  constructor(props: SequentialValueProps) {
    super(props)
    this.values = props.values
    this.loop = props.loop
  }

  stringInf(): string {
    return `sequential`
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }

  clone(): Field {
    return new SequentialNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      values: this.values,
      loop: this.loop,
      id: this.id,
    })
  }

  get datatype(): SequentialDatatype {
    return {
      type: DATA_TYPES.SEQUENTIAL,
      values: this.values,
      loop: this.loop,
    }
  }

  export(props: SearchProps): ExportDatasetFieldDTO {
    if (this.values.length === 0) {
      throw new EmptySequentialFieldError(this.getRouteString(props.fieldRoute))
    }

    const mapper = new ValueMapper()

    return {
      name: this.name,
      datatype: {
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

export class RefNode extends Field {
  private _ref: string[]
  readonly unique: boolean
  readonly where: RefWhere

  constructor(props: RefValueProps) {
    super(props)
    this._ref = props.ref
    this.unique = props.unique
    this.where = props.where
  }

  get datatype(): RefDatatype {
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

  get ref() {
    return this._ref
  }

  setRef(r: string[]) {
    this._ref = r
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }

  clone(): Field {
    return new RefNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      ref: this.ref,
      unique: this.unique,
      where: this.where,
      id: this.id,
    })
  }

  export({ searchRefField, fieldRoute }: SearchProps): ExportDatasetFieldDTO | DatasetError {
    const locationNames = searchRefField(this.ref)

    if (this.ref.length > 1) {
      return {
        name: this.name,
        datatype: {
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
      return new EmptyRefFieldError(this.getRouteString(fieldRoute))
    }
  }
}

export class EnumNode extends Field {
  readonly values: ArrayValue[]

  constructor(props: EnumValueProps) {
    super(props)
    this.values = props.values
  }

  stringInf(): string {
    return `enum`
  }

  get datatype(): EnumDatatype {
    return {
      type: DATA_TYPES.ENUM,
      values: this.values,
    }
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }

  clone(): Field {
    return new EnumNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      values: this.values,
      id: this.id,
    })
  }

  export(props: SearchProps): ExportDatasetFieldDTO | DatasetError {
    if (this.values.length === 0) {
      const route = this.getRouteString(props.fieldRoute)
      return new EmptyEnumFieldError(route)
    }

    const mapper = new ValueMapper()

    return {
      name: this.name,
      datatype: {
        type: DATA_TYPES.ENUM,
        values: this.values.map((v) => mapper.map(v)),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class CustomNode extends Field {
  readonly code: string

  constructor(props: CustomValueProps) {
    super(props)
    this.code = props.code
  }

  stringInf(): string {
    return `custom`
  }

  get datatype(): CustomDatatype {
    return { type: DATA_TYPES.CUSTOM, code: this.code }
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }

  clone(): Field {
    return new CustomNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      code: this.code,
      id: this.id,
    })
  }

  export(): ExportDatasetFieldDTO {
    return {
      name: this.name,
      datatype: { type: DATA_TYPES.CUSTOM, code: this.code },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class PickNode extends Field {
  static MIN_COUNT_VALUE = 0

  readonly values: ArrayValue[]
  readonly count: number

  constructor(props: PickValueProps) {
    super(props)
    this.values = props.values
    this.count = props.count
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }

  stringInf(): string {
    return `pick`
  }

  get datatype(): PickDatatype {
    return {
      count: this.count,
      type: DATA_TYPES.PICK,
      values: this.values,
    }
  }

  clone(): Field {
    return new PickNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      values: this.values,
      count: this.count,
      id: this.id,
    })
  }

  public export(): ExportDatasetFieldDTO {
    const mapper = new ValueMapper()

    return {
      name: this.name,
      datatype: {
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

export class MixedNode extends Field {
  readonly utils = new NodesUtils(this)

  constructor(props: MixedValueProps) {
    super(props)

    props.object.forEach((f) => {
      this.utils.insertNode(f)
    })
  }

  get nodes() {
    return this.utils.nodes
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: { type: DATA_TYPES.MIXED, object: this.nodes.map((f) => f.save()) },
    }
  }

  get datatype(): MixedDatatype {
    return {
      type: DATA_TYPES.MIXED,
      object: this.nodesToProps(),
    }
  }

  private nodesToProps(): NodeProps[] {
    return this.nodes.map((n) => ({
      datatype: n.datatype,
      id: n.id,
      isArray: n.isArray,
      isKey: n.isKey,
      isPossibleNull: n.isPossibleNull,
      name: n.name,
    }))
  }

  stringInf(): string {
    return `mixed`
  }

  clone(): Field {
    const node = new MixedNode({
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      object: this.nodes,
      id: this.id,
    })

    const newNodes = this.utils.nodes.map((n) => n.clone())

    newNodes.forEach((n) => node.utils.insertNode(n))

    return node
  }

  export(props: ExportFieldsProps): ExportDatasetFieldDTO {
    return {
      name: this.name,
      datatype: {
        type: DATA_TYPES.MIXED,
        object: this.utils.exportFields(props),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}

export class ProbabilityNode extends Field {
  readonly values: ProbabilityValue[]

  constructor(props: ProbabilityValueProps) {
    super(props)
    this.values = props.values
  }

  stringInf(): string {
    return `probability`
  }

  save(): SaveFieldDTO {
    return {
      id: this.id,
      name: this.name,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
      datatype: this.datatype,
    }
  }

  get datatype(): ProbabilityDatatype {
    return {
      type: DATA_TYPES.PROBABILITY,
      values: this.values,
    }
  }

  clone(): Field {
    return new ProbabilityNode({
      name: this.name,
      values: this.values,
      isArray: this.isArray,
      isKey: this.isKey,
      id: this.id,
      isPossibleNull: this.isPossibleNull,
    })
  }

  export(): ExportDatasetFieldDTO {
    const mapper = new ValueMapper()

    return {
      name: this.name,
      isArray: this.isArray,
      isPossibleNull: this.isPossibleNull,
      isKey: this.isKey,
      datatype: {
        type: DATA_TYPES.PROBABILITY,
        values: this.values.map((v) => {
          return { chance: mapper.map(v.chance), value: mapper.map(v.value) }
        }),
      },
    }
  }
}
