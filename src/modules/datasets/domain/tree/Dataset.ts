import {
  DatasetField,
  ExportDataset,
  RefDataType,
} from "@modules/datasets/interfaces/datasets.interface"
import { FieldNode } from "./FieldNode"
import { RootNode } from "./RootNode"
import { DatasetName } from "@modules/datasets/value-object"

interface DatasetProps {
  name: DatasetName
  limit?: number
}

export class Dataset {
  private root: RootNode

  constructor({ limit = 50, name }: DatasetProps) {
    this.root = new RootNode({ limit, name })
  }

  get name() {
    return this.root.name
  }

  get nodes() {
    return this.root.nodesUtils.nodes
  }

  get limit() {
    return this.root.limit()
  }

  get id() {
    return this.root.id
  }

  get fields(): Array<DatasetField> {
    return this.root.fields()
  }

  public setLimit(limit: number) {
    this.root.setLimit(limit)
  }

  public setName(name: DatasetName) {
    this.root.setName(name)
  }

  public insertField(node: FieldNode) {
    this.root.nodesUtils.insertNode(node)
  }

  public allPossibleFieldsToRef(): Array<FieldNode> {
    return this.root.nodesUtils.allPossibleFieldsToRef()
  }

  public findFieldParentNode(nodeID: string): FieldNode | RootNode | null {
    return this.root.nodesUtils.findFieldParentNode(nodeID)
  }

  public findNodeByID(nodeID: string): FieldNode | RootNode | null {
    if (this.id === nodeID) return this.root
    else return this.root.nodesUtils.findNodeByID(nodeID)
  }

  public findFieldByID(fieldID: string): FieldNode | null {
    return this.root.nodesUtils.findNodeByID(fieldID)
  }

  public findSameLevelFields(fieldID: string): Array<FieldNode> {
    return this.root.nodesUtils.getSameLevelNodes(fieldID)
  }

  public object(): ExportDataset {
    return {
      id: this.id,
      name: this.name,
      fields: this.fields,
      limit: this.limit,
    }
  }

  public deleteField(fieldID: string): void {
    this.root.nodesUtils.deleteField(fieldID)
  }

  public refFields(): Array<FieldNode<RefDataType>> {
    return this.root.nodesUtils.refFields()
  }

  public getFieldLocation(fieldID: string): string[] {
    const ret = this.root.nodesUtils.getFieldLocation(fieldID, [])

    if (ret) {
      return ret
    } else {
      return []
    }
  }
}
