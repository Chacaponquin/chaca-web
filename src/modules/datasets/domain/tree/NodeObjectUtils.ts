import { RefDataType } from "@modules/datasets/interfaces/dataset_field.interface"
import { FieldNode, MixedNode } from "./FieldNode"
import { DATA_TYPES } from "@modules/schemas/constants"
import { RootNode } from "./RootNode"

export class NodeObjectUtils {
  private _nodes: Array<FieldNode> = []
  private _instance: FieldNode | RootNode

  constructor(instance: FieldNode | RootNode) {
    this._instance = instance
  }

  get nodes() {
    return this._nodes
  }

  public insertNode(node: FieldNode): void {
    this.nodes.push(node)
  }

  public hasKeyField(): boolean {
    return this.nodes.some((n) => n.isKey)
  }

  public getSameLevelNodes(fieldID: string): Array<FieldNode> {
    const findNode = this.nodes.some((n) => n.id === fieldID)
    if (findNode) return this.nodes

    let returnArray = [] as Array<FieldNode>

    for (let i = 0; i < this.nodes.length && returnArray.length === 0; i++) {
      const node = this.nodes[i]

      if (node instanceof MixedNode) {
        returnArray = node.nodesUtils.getSameLevelNodes(fieldID)
      }
    }

    return returnArray
  }

  public findFieldParentNode(nodeID: string): FieldNode | RootNode | null {
    const findNode = this.nodes.some((n) => n.id === nodeID)

    if (findNode) {
      return this._instance
    } else {
      let returnValue = null

      for (let i = 0; i < this.nodes.length && !returnValue; i++) {
        const node = this.nodes[i]

        if (node instanceof MixedNode) {
          returnValue = node.nodesUtils.findFieldParentNode(nodeID)
        }
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
          const node = this.nodes[i]

          if (node instanceof MixedNode) {
            find = node.nodesUtils.findNodeByID(nodeID)
          }
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
        const node = this.nodes[i]

        if (node instanceof MixedNode) {
          if (node.nodesUtils.deleteField(fieldID)) {
            stop = true
          }
        }
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
      return [...location, this._instance.name, found.name]
    }

    let ret: string[] | null = null

    for (let i = 0; i < this.nodes.length && !ret; i++) {
      const node = this.nodes[i]

      if (node instanceof MixedNode) {
        ret = node.nodesUtils.getFieldLocation(fieldID, [...location, node.name])
      }
    }

    return ret ? ret : null
  }

  public refFields(): Array<FieldNode<RefDataType>> {
    let ref = [] as Array<FieldNode<RefDataType>>

    this.nodes.forEach((f) => {
      if (f.dataType.type === DATA_TYPES.REF) {
        ref.push(f as FieldNode<RefDataType>)
      } else if (f instanceof MixedNode) {
        ref = [...ref, ...f.nodesUtils.refFields()]
      }
    })

    return ref
  }

  public allPossibleFieldsToRef(): Array<FieldNode> {
    let returnFields = [] as Array<FieldNode>

    for (const node of this.nodes) {
      if (node instanceof MixedNode) {
        const fields = node.nodesUtils.allPossibleFieldsToRef()
        returnFields = [...returnFields, ...fields]
      } else {
        if (node.isKey) {
          returnFields.push(node)
        }
      }
    }

    return returnFields
  }
}
