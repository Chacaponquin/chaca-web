import { FieldProps } from "@modules/datasets/dto/field"
import { Field, MixedNode, RefNode } from "./Field"
import { RootNode } from "./RootNode"
import { ExportFieldsProps, SaveProps } from "@modules/datasets/interfaces/tree"
import { ExportDatasetFieldDTO, SaveFieldDTO } from "@modules/datasets/dto/dataset"
import { DatasetError } from "@modules/datasets/errors/dataset"

interface GetLocationProps {
  fieldId: string
  location: string[]
  isIdLocation: boolean
}

export class NodesUtils {
  private _nodes: Field[] = []
  private _instance: MixedNode | RootNode

  constructor(instance: MixedNode | RootNode) {
    this._instance = instance
  }

  get nodes() {
    return this._nodes
  }

  insertNode(node: Field): void {
    this._nodes.push(node)
  }

  hasKeyField(): boolean {
    let has = this.nodes.some((n) => n.isKey)

    if (!has) {
      for (const node of this.nodes) {
        if (node instanceof MixedNode) {
          const childHas = node.utils.hasKeyField()

          if (childHas) {
            has = childHas
            break
          }
        }
      }
    }

    return has
  }

  getSameLevelNodes(fieldId: string): Field[] {
    const exists = this.nodes.some((n) => n.id === fieldId)

    if (exists) {
      return this.nodes
    }

    let returnArray = [] as Field[]

    for (let i = 0; i < this.nodes.length && returnArray.length === 0; i++) {
      const node = this.nodes[i]

      if (node instanceof MixedNode) {
        returnArray = node.utils.getSameLevelNodes(fieldId)
      }
    }

    return returnArray
  }

  exportFields(props: ExportFieldsProps): ExportDatasetFieldDTO[] {
    const array = [] as ExportDatasetFieldDTO[]

    for (const n of this.nodes) {
      const result = n.export({ ...props, fieldRoute: [...props.fieldRoute, this._instance.name] })

      if (result instanceof DatasetError) {
        props.errors.push(result)
      } else {
        array.push(result)
      }
    }

    return array
  }

  saveFields(props: SaveProps): SaveFieldDTO[] {
    return this.nodes.map((n) => n.save(props))
  }

  findFieldParentNode(nodeId: string): MixedNode | RootNode | null {
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

  findNodeById(id: string): Field | null {
    if (this.nodes.length === 0) {
      return null
    } else {
      let found = this.nodes.find((n) => n.id === id) || null

      if (!found) {
        for (let i = 0; i < this.nodes.length && !found; i++) {
          const node = this.nodes[i]

          if (node instanceof MixedNode) {
            found = node.utils.findNodeById(id)
          }
        }
      }

      return found
    }
  }

  findNodeByIdAndEdit(props: FieldProps): boolean {
    let found = false

    for (let i = 0; i < this.nodes.length && !found; i++) {
      const node = this.nodes[i]

      if (node.id === props.id) {
        const field = Field.create({
          dataType: props.dataType,
          name: props.name,
          isArray: props.isArray,
          isKey: props.isKey,
          isPossibleNull: props.isPossibleNull,
          id: props.id,
        })

        this.nodes[i] = field
      }
    }

    if (!found) {
      for (let i = 0; i < this.nodes.length && !found; i++) {
        const node = this.nodes[i]

        if (node instanceof MixedNode) {
          found = node.utils.findNodeByIdAndEdit(props)
        }
      }
    }

    return found
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

  getFieldLocation({ fieldId, location, isIdLocation }: GetLocationProps): string[] | null {
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
        const newLocation = isIdLocation
          ? [...location, this._instance.id]
          : [...location, this._instance.name]
        ret = node.utils.getFieldLocation({
          fieldId,
          location: newLocation,
          isIdLocation: isIdLocation,
        })
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

  allPossibleFieldsToRef(): Field[] {
    let returnFields = [] as Field[]

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
