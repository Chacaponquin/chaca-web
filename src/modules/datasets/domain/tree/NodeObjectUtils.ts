import {
  ExportDatatype,
  ExportMixedDataType,
  FieldDataType,
  MixedDataType,
} from "@modules/datasets/interfaces/dataset_field.interface"
import { FieldNode, MixedNode, RefNode } from "./FieldNode"
import { RootNode } from "./RootNode"
import { ExportDatasetField } from "@modules/datasets/dto/dataset"
import { SearchProps } from "@modules/datasets/interfaces/tree.interface"

interface GetLocationProps {
  fieldId: string
  location: Array<string>
  isIdLocation?: boolean
}

export class NodeObjectUtils {
  private _nodes: Array<FieldNode<FieldDataType, ExportDatatype>> = []
  private _instance: FieldNode<MixedDataType, ExportMixedDataType> | RootNode

  constructor(instance: FieldNode<MixedDataType, ExportMixedDataType> | RootNode) {
    this._instance = instance
  }

  get nodes() {
    return this._nodes
  }

  public insertNode(node: FieldNode<FieldDataType, ExportDatatype>): void {
    this._nodes.push(node)
  }

  public hasKeyField(): boolean {
    return this.nodes.some((n) => n.isKey)
  }

  public getSameLevelNodes(fieldId: string): Array<FieldNode<FieldDataType, ExportDatatype>> {
    const findNode = this.nodes.some((n) => n.id === fieldId)
    if (findNode) return this.nodes

    let returnArray = [] as Array<FieldNode<FieldDataType, ExportDatatype>>

    for (let i = 0; i < this.nodes.length && returnArray.length === 0; i++) {
      const node = this.nodes[i]

      if (node instanceof MixedNode) {
        returnArray = node.nodesUtils.getSameLevelNodes(fieldId)
      }
    }

    return returnArray
  }

  public exportFields(props: SearchProps): Array<ExportDatasetField<ExportDatatype>> {
    return this._nodes.map((n) => n.exportObject(props))
  }

  public findFieldParentNode(
    nodeId: string,
  ): FieldNode<MixedDataType, ExportMixedDataType> | RootNode | null {
    const findNode = this.nodes.some((n) => n.id === nodeId)

    if (findNode) {
      return this._instance
    } else {
      let returnValue = null

      for (let i = 0; i < this.nodes.length && !returnValue; i++) {
        const node = this.nodes[i]

        if (node instanceof MixedNode) {
          returnValue = node.nodesUtils.findFieldParentNode(nodeId)
        }
      }

      return returnValue
    }
  }

  public findNodeById(nodeID: string): FieldNode<FieldDataType, ExportDatatype> | null {
    if (this.nodes.length === 0) {
      return null
    } else {
      let find: FieldNode<FieldDataType, ExportDatatype> | null = null

      find = this.nodes.find((n) => n.id === nodeID) || null

      if (!find) {
        for (let i = 0; i < this.nodes.length && !find; i++) {
          const node = this.nodes[i]

          if (node instanceof MixedNode) {
            find = node.nodesUtils.findNodeById(nodeID)
          }
        }
      }

      return find
    }
  }

  public deleteField(fieldId: string): boolean {
    let deleted = false

    for (let i = 0; i < this.nodes.length && !deleted; i++) {
      if (this.nodes[i].id === fieldId) {
        deleted = true
        this._nodes = this.nodes.filter((el) => el.id !== fieldId)
      }
    }

    if (!deleted) {
      let stop = false

      for (let i = 0; i < this.nodes.length && !stop; i++) {
        const node = this.nodes[i]

        if (node instanceof MixedNode) {
          if (node.nodesUtils.deleteField(fieldId)) {
            stop = true
          }
        }
      }

      return stop
    } else {
      return deleted
    }
  }

  public getFieldLocation({
    fieldId,
    location,
    isIdLocation = false,
  }: GetLocationProps): string[] | null {
    if (this.nodes.length === 0) {
      return null
    }

    const found = this.nodes.find((n) => n.id === fieldId)
    if (found) {
      const newLocation = isIdLocation
        ? [...location, this._instance.id, found.id]
        : [...location, this._instance.name, found.name]
      return newLocation
    }

    let ret: string[] | null = null
    for (let i = 0; i < this.nodes.length && !ret; i++) {
      const node = this.nodes[i]

      if (node instanceof MixedNode) {
        const newLocation = isIdLocation ? [...location, node.id] : [...location, node.name]
        ret = node.nodesUtils.getFieldLocation({ fieldId, location: newLocation })
      }
    }

    return ret ? ret : null
  }

  public refFields(): Array<RefNode> {
    let ref = [] as Array<RefNode>

    this.nodes.forEach((f) => {
      if (f instanceof RefNode) {
        ref.push(f)
      } else if (f instanceof MixedNode) {
        ref = [...ref, ...f.nodesUtils.refFields()]
      }
    })

    return ref
  }

  public allPossibleFieldsToRef(): Array<FieldNode<FieldDataType, ExportDatatype>> {
    let returnFields = [] as Array<FieldNode<FieldDataType, ExportDatatype>>

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
