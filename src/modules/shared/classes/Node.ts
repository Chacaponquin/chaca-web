import { v4 as uuid } from "uuid"
import { FieldNode } from "./FieldNode"

export class Node {
  protected nodes: Array<FieldNode> = []
  public readonly id: string = uuid()
  private nodeName: string

  constructor(name: string) {
    this.nodeName = name
    this.setName(name)
  }

  get name() {
    return this.nodeName
  }

  public insertNode(node: FieldNode): void {
    this.nodes.push(node)
  }

  public setName(newName: string) {
    if (newName !== "") this.nodeName = newName
  }

  public findNodeByID(nodeID: string): null | FieldNode {
    if (this.nodes.length === 0) return null
    else {
      let find: FieldNode | null = null

      find = this.nodes.find((n) => n.id === nodeID) || null

      if (!find) {
        for (let i = 0; i < this.nodes.length && !find; i++) {
          find = this.nodes[i].findNodeByID(nodeID)
        }
      }

      return find
    }
  }

  public deleteField(fieldID: string): boolean {
    let deleted = false

    for (let i = 0; i < this.nodes.length && !deleted; i++) {
      if (this.nodes[i].id === fieldID) {
        deleted = true
        this.nodes = this.nodes.filter((el) => el.id !== fieldID)
      }
    }

    if (!deleted) {
      let stop = false

      for (let i = 0; i < this.nodes.length && !stop; i++) {
        if (this.nodes[i].deleteField(fieldID)) stop = true
      }

      return stop
    } else {
      return deleted
    }
  }

  public getFieldLocation(fieldID: string, location: string[]): string[] | null {
    if (this.nodes.length === 0) return null
    else {
      const found = this.nodes.find((n) => n.id === fieldID)

      if (found) {
        return [...location, this.name, found.name]
      } else {
        let ret: string[] | null = null

        for (let i = 0; i < this.nodes.length && !ret; i++) {
          ret = this.nodes[i].getFieldLocation(fieldID, [...location, this.id])
        }

        return ret ? ret : null
      }
    }
  }
}
