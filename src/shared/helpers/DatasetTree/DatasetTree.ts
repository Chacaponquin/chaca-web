import { Dataset } from "../../../modules/datasets/interfaces/datasets.interface"
import { FieldNode } from "./FieldNode"
import { RootNode } from "./RootNode"

export class DatasetTree {
  private root: RootNode

  constructor(name: string, limit: number) {
    this.root = new RootNode(limit, name)
  }

  get name() {
    return this.root.name
  }

  get limit() {
    return this.root.limit
  }

  get id() {
    return this.root.id
  }

  get fields() {
    return this.root.getFields()
  }

  public setLimit(limit: number) {
    this.root.limit = limit
  }

  public setName(name: string) {
    this.root.setName(name)
  }

  public insertField(node: FieldNode) {
    this.root.insertNode(node)
  }

  public findFieldByID(fieldID: string): FieldNode | null {
    return this.root.findNodeByID(fieldID)
  }

  public getDatasetObject(): Dataset {
    return {
      id: this.id,
      name: this.name,
      fields: this.fields,
      limit: this.limit,
    }
  }

  public deleteField(fieldID: string) {
    this.root.deleteField(fieldID)
  }

  public getFieldLocation(fieldID: string): string[] {
    const ret = this.root.getFieldLocation(fieldID, [])

    if (ret) return ret
    else return []
  }
}
