import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { NodeInfo } from "@modules/datasets/interfaces/tree.interface"
import { Node } from "./Node"
import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/datasets/interfaces/field_config.interface"

export class FieldNode<T = FieldDataType> extends Node {
  private _dataType: T
  private _isArray: IsArrayConfig
  private _possibleNull: PossibleNullConfig
  private _isKey: IsKeyConfig

  constructor({ name, dataType, isArray = null, isKey = false, isPosibleNull = 0 }: NodeInfo<T>) {
    super(name)
    this._dataType = dataType
    this._isArray = isArray
    this._possibleNull = isPosibleNull
    this._isKey = isKey
  }

  public dataType() {
    return this._dataType
  }

  public isArray() {
    return this._isArray
  }

  public isPossibleNull() {
    return this._possibleNull
  }

  public isKey() {
    return this._isKey
  }

  public setIsArray(config: IsArrayConfig): void {
    this._isArray = config
  }

  public setIsPossibleNull(config: PossibleNullConfig): void {
    this._possibleNull = config
  }

  public object(): DatasetField<T> {
    if (this.nodes.length === 0) {
      return {
        id: this.id,
        name: this.name,
        dataType: this._dataType,
        isArray: this._isArray,
        isKey: this._isKey,
        isPosibleNull: this._possibleNull,
      }
    } else {
      return {
        id: this.id,
        name: this.name,
        dataType: {
          object: this.nodes.map((el) => el.object()),
          type: DATA_TYPES.MIXED,
        },
        isArray: this._isArray,
        isKey: this._isKey,
      } as DatasetField<T>
    }
  }
}
