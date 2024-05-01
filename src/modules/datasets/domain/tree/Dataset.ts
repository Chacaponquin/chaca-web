import { Field, RefNode } from "./Field"
import { RootNode } from "./RootNode"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportDataset } from "./ExportDataset"
import { ExportDatatypeDTO, ExportMixedDataType, FieldProps } from "@modules/datasets/dto/field"

interface DatasetProps {
  name: string
  limit: number
}

export class Dataset {
  static DEFAULT_LIMIT = 50

  private root: RootNode

  constructor({ limit, name }: DatasetProps) {
    this.root = new RootNode({ limit, name })
  }

  get nameId() {
    return this.name.replace(" ", "-")
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

  clone(): Dataset {
    return this.root.clone()
  }

  equalName(name: string): boolean {
    return this.name.trim() === name.trim()
  }

  exportFields(props: SearchProps) {
    return this.root.utils.exportFields(props)
  }

  setLimit(limit: number) {
    this.root.setLimit(limit)
  }

  setName(name: string) {
    this.root.setName(name)
  }

  insertField(node: Field<ExportDatatypeDTO>) {
    this.root.utils.insertNode(node)
  }

  hasKeyField(): boolean {
    return this.root.utils.hasKeyField()
  }

  allPossibleFieldsToRef(): Field<ExportDatatypeDTO>[] {
    return this.root.utils.allPossibleFieldsToRef()
  }

  findFieldParentNode(nodeID: string): Field<ExportMixedDataType> | RootNode | null {
    return this.root.utils.findFieldParentNode(nodeID)
  }

  findNodeById(id: string): Field<ExportDatatypeDTO> | RootNode | null {
    if (this.id === id) return this.root
    else return this.root.utils.findNodeById(id)
  }

  findNodeByIdAndEdit(props: FieldProps) {
    this.root.utils.findNodeByIdAndEdit(props)
  }

  findFieldById(fieldId: string): Field<ExportDatatypeDTO> | null {
    return this.root.utils.findNodeById(fieldId)
  }

  findSameLevelFields(fieldId: string): Field<ExportDatatypeDTO>[] {
    return this.root.utils.getSameLevelNodes(fieldId)
  }

  exportObject(props: SearchProps): ExportDataset {
    return new ExportDataset({
      fields: this.exportFields(props),
      limit: this.limit,
      name: this.name,
    })
  }

  deleteField(fieldId: string): void {
    this.root.utils.deleteField(fieldId)
  }

  refFields(): RefNode[] {
    return this.root.utils.refFields()
  }

  getFieldLocationIds(fieldId: string): string[] {
    const ret = this.root.utils.getFieldLocation({ fieldId, location: [], isIdLocation: true })
    return ret ? ret : []
  }

  getFieldLocation(fieldId: string): string[] {
    const ret = this.root.utils.getFieldLocation({
      fieldId,
      location: [],
      isIdLocation: false,
    })

    return ret ? ret : []
  }
}
