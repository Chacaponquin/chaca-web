import { v4 as uuid } from "uuid"
import { FieldNode } from "./FieldNode"
import { DATA_TYPES } from "@modules/schemas/constants"
import { RefDataType } from "@modules/datasets/interfaces/dataset_field.interface"
import { NameValidator } from "@modules/datasets/value-object"

export class Node {
  public readonly id: string = uuid()
  private _nodes: Array<FieldNode> = []
  private _name: NameValidator

  constructor(name: NameValidator) {
    this._name = name
  }

  public get nodes() {
    return this._nodes
  }

  get name() {
    return this._name.value()
  }

  public insertNode(node: FieldNode): void {
    this.nodes.push(node)
  }

  public setName(newName: NameValidator) {
    this._name = newName
  }

  public getSameLevelNodes(fieldID: string): Array<FieldNode> {
    const findNode = this.nodes.some((n) => n.id === fieldID)

    if (findNode) return this.nodes

    let returnArray = [] as Array<FieldNode>

    for (let i = 0; i < this.nodes.length && returnArray.length === 0; i++) {
      returnArray = this.nodes[i].getSameLevelNodes(fieldID)
    }

    return returnArray
  }

  public findFieldParentNode(nodeID: string): Node | null {
    const findNode = this.nodes.some((n) => n.id === nodeID)

    if (findNode) {
      return this
    } else {
      let returnValue = null

      for (let i = 0; i < this.nodes.length && !returnValue; i++) {
        returnValue = this.nodes[i].findFieldParentNode(nodeID)
      }

      return returnValue
    }
  }

  public findNodeByID(nodeID: string): null | FieldNode {
    if (this.nodes.length === 0) return null
    else {
      let find: FieldNode | null = null

      find = this.nodes.find((n) => n.id === nodeID) || null

      if (!find) {
        for (let i = 0; i < this.nodes.length && !find; i++) {
          find = this.nodes[i].findNodeByID(nodeID)
        }
      }

      return find
    }
  }

  public deleteField(fieldID: string): boolean {
    let deleted = false

    for (let i = 0; i < this.nodes.length && !deleted; i++) {
      if (this.nodes[i].id === fieldID) {
        deleted = true
        this._nodes = this.nodes.filter((el) => el.id !== fieldID)
      }
    }

    if (!deleted) {
      let stop = false

      for (let i = 0; i < this.nodes.length && !stop; i++) {
        if (this.nodes[i].deleteField(fieldID)) stop = true
      }

      return stop
    } else {
      return deleted
    }
  }

  public getFieldLocation(fieldID: string, location: string[]): string[] | null {
    if (this.nodes.length === 0) {
      return null
    }

    const found = this.nodes.find((n) => n.id === fieldID)
    if (found) {
      return [...location, this.name, found.name]
    }

    let ret: string[] | null = null

    for (let i = 0; i < this.nodes.length && !ret; i++) {
      ret = this.nodes[i].getFieldLocation(fieldID, [...location, this.name])
    }

    return ret ? ret : null
  }

  public refFields(): Array<FieldNode<RefDataType>> {
    let ref = [] as Array<FieldNode<RefDataType>>

    this.nodes.forEach((f) => {
      if (f.dataType.type === DATA_TYPES.REF) {
        ref.push(f as FieldNode<RefDataType>)
      } else if (f.dataType.type === DATA_TYPES.MIXED) {
        ref = [...ref, ...f.refFields()]
      }
    })

    return ref
  }
}
