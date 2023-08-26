import {
  DatasetField,
  ExportDataset,
  RefDataType,
} from "@modules/datasets/interfaces/datasets.interface"
import { FieldNode } from "./FieldNode"
import { Node } from "./Node"
import { RootNode } from "./RootNode"
import { DatasetName } from "@modules/datasets/value-object"

interface DatasetProps {
  name: string
  limit?: number
}

export class Dataset {
  private root: RootNode
  private _name: DatasetName

  constructor({ limit = 50, name }: DatasetProps) {
    this._name = new DatasetName(name)
    this.root = new RootNode({ limit, name })
  }

  get name() {
    return this._name.value()
  }

  get nodes() {
    return this.root.nodes
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

  public setName(name: string) {
    this._name = new DatasetName(name)
  }

  public insertField(node: FieldNode) {
    this.root.insertNode(node)
  }

  public findFieldParentNode(nodeID: string): Node | null {
    return this.root.findFieldParentNode(nodeID)
  }

  public findNodeByID(nodeID: string): Node | null {
    if (this.root.id === nodeID) return this.root
    else return this.root.findNodeByID(nodeID)
  }

  public findFieldByID(fieldID: string): FieldNode | null {
    return this.root.findNodeByID(fieldID)
  }

  public findSameLevelFields(fieldID: string): Array<FieldNode> {
    return this.root.getSameLevelNodes(fieldID)
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
    this.root.deleteField(fieldID)
  }

  public refFields(): Array<FieldNode<RefDataType>> {
    return this.root.refFields()
  }

  public getFieldLocation(fieldID: string): string[] {
    const ret = this.root.getFieldLocation(fieldID, [])

    if (ret) return ret
    else return []
  }
}
