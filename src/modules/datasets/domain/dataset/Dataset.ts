import { Field, MixedNode, RefNode } from "./Field"
import { RootNode } from "./RootNode"
import { SaveProps, SearchProps } from "@modules/datasets/interfaces/dataset"
import { FieldProps } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO, SaveFieldDTO } from "@modules/datasets/dto/dataset"
import { DatasetError } from "@modules/datasets/errors/dataset"

interface Props {
  name: string
  limit: number
  id: string
}

export class Dataset {
  static DEFAULT_LIMIT = 50

  private root: RootNode

  constructor({ limit, name, id }: Props) {
    this.root = new RootNode({ limit, name, id })
  }

  get slug() {
    return this.name.replace(" ", "-")
  }

  get name() {
    return this.root.name
  }

  get nodes() {
    return this.root.utils.nodes
  }

  get limit() {
    return this.root.limit
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

  exportFields(props: SearchProps): [ExportDatasetFieldDTO[], DatasetError[]] {
    const errors = [] as DatasetError[]
    const fields = this.root.utils.exportFields({ ...props, errors: errors })

    return [fields, errors]
  }

  saveFields(props: SaveProps): SaveFieldDTO[] {
    return this.root.utils.saveFields(props)
  }

  setLimit(limit: number) {
    this.root.setLimit(limit)
  }

  setName(name: string) {
    this.root.setName(name)
  }

  insertField(node: Field) {
    this.root.utils.insertNode(node)
  }

  hasKeyField(): boolean {
    return this.root.utils.hasKeyField()
  }

  allPossibleFieldsToRef(): Field[] {
    return this.root.utils.allPossibleFieldsToRef()
  }

  findFieldParentNode(nodeID: string): MixedNode | RootNode | null {
    return this.root.utils.findFieldParentNode(nodeID)
  }

  findNodeById(id: string): Field | RootNode | null {
    if (this.id === id) return this.root
    else return this.root.utils.findNodeById(id)
  }

  findNodeByIdAndEdit(props: FieldProps) {
    this.root.utils.findNodeByIdAndEdit(props)
  }

  findFieldById(fieldId: string): Field | null {
    return this.root.utils.findNodeById(fieldId)
  }

  findSameLevelFields(fieldId: string): Field[] {
    return this.root.utils.getSameLevelNodes(fieldId)
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
