import {
  DatasetField,
  DatasetObject,
  RefDataType,
} from "@modules/datasets/interfaces/datasets.interface"
import { FieldNode } from "./FieldNode"
import { RootNode } from "./RootNode"
import { DatasetName } from "@modules/datasets/value-object"
import { ExportDataset } from "@modules/datasets/dto/dataset"
import { SearchProps } from "@modules/datasets/interfaces/tree.interface"

interface DatasetProps {
  name: DatasetName
  limit?: number
}

export class Dataset {
  private root: RootNode

  constructor({ limit = 50, name }: DatasetProps) {
    this.root = new RootNode({ limit, name })
  }

  public equalName(name: string): boolean {
    return this.name.trim() === name.trim()
  }

  public exportFields(props: SearchProps) {
    return this.root.exportFields(props)
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

  public hasKeyField(): boolean {
    return this.root.nodesUtils.hasKeyField()
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

  public exportObject(props: SearchProps): ExportDataset {
    return {
      fields: this.exportFields(props),
      limit: this.limit,
      name: this.name,
    }
  }

  public object(): DatasetObject {
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

  public getFieldLocationIds(fieldId: string): string[] {
    const ret = this.root.nodesUtils.getFieldLocation({ fieldId, location: [], isIdLocation: true })
    return ret ? ret : []
  }

  public getFieldLocation(fieldId: string): string[] {
    const ret = this.root.nodesUtils.getFieldLocation({
      fieldId,
      location: [],
      isIdLocation: false,
    })
    return ret ? ret : []
  }
}
