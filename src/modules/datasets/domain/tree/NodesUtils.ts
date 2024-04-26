import { ExportDatatypeDTO, ExportMixedDataType } from "@modules/datasets/dto/field"
import { FieldDataType, MixedDataType } from "@modules/datasets/interfaces/dataset-field"
import { Field } from "./Field"
import { RootNode } from "./RootNode"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { MixedNode } from "./MixedNode"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { RefNode } from "./RefNode"

interface GetLocationProps {
  fieldId: string
  location: string[]
  isIdLocation?: boolean
}

export class NodesUtils {
  private _nodes: Field<FieldDataType, ExportDatatypeDTO>[] = []
  private _instance: Field<MixedDataType, ExportMixedDataType> | RootNode

  constructor(instance: Field<MixedDataType, ExportMixedDataType> | RootNode) {
    this._instance = instance
  }

  get nodes() {
    return this._nodes
  }

  insertNode(node: Field<FieldDataType, ExportDatatypeDTO>): void {
    this._nodes.push(node)
  }

  hasKeyField(): boolean {
    return this.nodes.some((n) => n.isKey)
  }

  getSameLevelNodes(fieldId: string): Array<Field<FieldDataType, ExportDatatypeDTO>> {
    const findNode = this.nodes.some((n) => n.id === fieldId)
    if (findNode) return this.nodes

    let returnArray = [] as Array<Field<FieldDataType, ExportDatatypeDTO>>

    for (let i = 0; i < this.nodes.length && returnArray.length === 0; i++) {
      const node = this.nodes[i]

      if (node instanceof MixedNode) {
        returnArray = node.utils.getSameLevelNodes(fieldId)
      }
    }

    return returnArray
  }

  exportFields(props: SearchProps): ExportDatasetFieldDTO<ExportDatatypeDTO>[] {
    return this.nodes.map((n) =>
      n.exportObject({ ...props, fieldRoute: [...props.fieldRoute, this._instance.name] }),
    )
  }

  findFieldParentNode(nodeId: string): Field<MixedDataType, ExportMixedDataType> | RootNode | null {
    const findNode = this.nodes.some((n) => n.id === nodeId)

    if (findNode) {
      return this._instance
    } else {
      let returnValue = null

      for (let i = 0; i < this.nodes.length && !returnValue; i++) {
        const node = this.nodes[i]

        if (node instanceof MixedNode) {
          returnValue = node.utils.findFieldParentNode(nodeId)
        }
      }

      return returnValue
    }
  }

  findNodeById(nodeID: string): Field<FieldDataType, ExportDatatypeDTO> | null {
    if (this.nodes.length === 0) {
      return null
    } else {
      let find: Field<FieldDataType, ExportDatatypeDTO> | null = null

      find = this.nodes.find((n) => n.id === nodeID) || null

      if (!find) {
        for (let i = 0; i < this.nodes.length && !find; i++) {
          const node = this.nodes[i]

          if (node instanceof MixedNode) {
            find = node.utils.findNodeById(nodeID)
          }
        }
      }

      return find
    }
  }

  deleteField(fieldId: string): boolean {
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
          if (node.utils.deleteField(fieldId)) {
            stop = true
          }
        }
      }

      return stop
    } else {
      return deleted
    }
  }

  getFieldLocation({ fieldId, location, isIdLocation = false }: GetLocationProps): string[] | null {
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
        ret = node.utils.getFieldLocation({ fieldId, location: newLocation })
      }
    }

    return ret ? ret : null
  }

  refFields(): RefNode[] {
    let ref = [] as RefNode[]

    this.nodes.forEach((f) => {
      if (f instanceof RefNode) {
        ref.push(f)
      } else if (f instanceof MixedNode) {
        ref = [...ref, ...f.utils.refFields()]
      }
    })

    return ref
  }

  allPossibleFieldsToRef(): Field<FieldDataType, ExportDatatypeDTO>[] {
    let returnFields = [] as Field<FieldDataType, ExportDatatypeDTO>[]

    for (const node of this.nodes) {
      if (node instanceof MixedNode) {
        const fields = node.utils.allPossibleFieldsToRef()
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
