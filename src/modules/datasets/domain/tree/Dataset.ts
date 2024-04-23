import {
  DatasetField,
  DatasetObject,
  FieldDataType,
  RefDataType,
} from "@modules/datasets/interfaces/datasets"
import { Field } from "./Field"
import { RootNode } from "./RootNode"
import { DatasetName } from "@modules/datasets/value-object"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import {
  ExportDatatype,
  ExportMixedDataType,
  ExportRefDataType,
  MixedDataType,
} from "@modules/datasets/interfaces/dataset-field"
import { ExportDataset } from "./ExportDataset"

interface DatasetProps {
  name: DatasetName
  limit?: number
}

export class Dataset {
  public static DEFAULT_LIMIT = 50

  private root: RootNode

  constructor({ limit = Dataset.DEFAULT_LIMIT, name }: DatasetProps) {
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
    return this.root.utils.nodes
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

  public insertField(node: Field<FieldDataType, ExportDatatype>) {
    this.root.utils.insertNode(node)
  }

  public hasKeyField(): boolean {
    return this.root.utils.hasKeyField()
  }

  public allPossibleFieldsToRef(): Array<Field<FieldDataType, ExportDatatype>> {
    return this.root.utils.allPossibleFieldsToRef()
  }

  public findFieldParentNode(
    nodeID: string,
  ): Field<MixedDataType, ExportMixedDataType> | RootNode | null {
    return this.root.utils.findFieldParentNode(nodeID)
  }

  public findNodeById(nodeID: string): Field<FieldDataType, ExportDatatype> | RootNode | null {
    if (this.id === nodeID) return this.root
    else return this.root.utils.findNodeById(nodeID)
  }

  public findFieldById(fieldId: string): Field<FieldDataType, ExportDatatype> | null {
    return this.root.utils.findNodeById(fieldId)
  }

  public findSameLevelFields(fieldId: string): Array<Field<FieldDataType, ExportDatatype>> {
    return this.root.utils.getSameLevelNodes(fieldId)
  }

  public exportObject(props: SearchProps): ExportDataset {
    return new ExportDataset({
      fields: this.exportFields(props),
      limit: this.limit,
      name: this.name,
    })
  }

  public object(): DatasetObject {
    return {
      id: this.id,
      name: this.name,
      fields: this.fields,
      limit: this.limit,
    }
  }

  public deleteField(fieldId: string): void {
    this.root.utils.deleteField(fieldId)
  }

  public refFields(): Array<Field<RefDataType, ExportRefDataType>> {
    return this.root.utils.refFields()
  }

  public getFieldLocationIds(fieldId: string): string[] {
    const ret = this.root.utils.getFieldLocation({ fieldId, location: [], isIdLocation: true })
    return ret ? ret : []
  }

  public getFieldLocation(fieldId: string): string[] {
    const ret = this.root.utils.getFieldLocation({
      fieldId,
      location: [],
      isIdLocation: false,
    })

    return ret ? ret : []
  }
}
