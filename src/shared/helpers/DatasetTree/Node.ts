import { v4 as uuid } from "uuid";
import { FieldNode } from "./FieldNode";

export class Node {
  protected nodes: Array<FieldNode> = [];
  public readonly id: string = uuid();

  constructor(public name: string) {}

  public deleteField(fieldID: string): boolean {
    let deleted = false;

    for (let i = 0; i < this.nodes.length && !deleted; i++) {
      if (this.nodes[i].id === fieldID) {
        deleted = true;
        this.nodes = this.nodes.filter((el) => el.id !== fieldID);
      }
    }

    if (!deleted) {
      let stop = false;

      for (let i = 0; i < this.nodes.length && !stop; i++) {
        if (this.nodes[i].deleteField(fieldID)) stop = true;
      }

      return stop;
    } else {
      return deleted;
    }
  }

  public findFieldByID(fieldID: string): FieldNode | null {
    const found = this.nodes.find((el) => el.id === fieldID);

    if (found) return found;
    else {
      let ret: FieldNode | null = null;
      for (let i = 0; i < this.nodes.length && !ret; i++) {
        ret = this.nodes[i].findFieldByID(fieldID);
      }
      return ret;
    }
  }

  public getFieldLocation(
    fieldID: string,
    location: string[]
  ): string[] | null {
    if (this.nodes.length === 0) return null;
    else {
      let found = this.nodes.find((n) => n.id === fieldID);

      if (found) {
        return [...location, this.name];
      } else {
        let ret: string[] | null = null;

        for (let i = 0; i < this.nodes.length && !ret; i++) {
          ret = this.nodes[i].getFieldLocation(fieldID, [
            ...location,
            this.name,
          ]);
        }

        return ret ? ret : null;
      }
    }
  }

  public setFieldByLocation(field: FieldNode, location: string[]): boolean {
    if (location.length === 0) {
      // verificar que no existe otro field con ese nombre dentro del nodo
      // en caso de que no este repetido se guarda
      const found = this.nodes.find((n) => n.name === field.name);
      if (!found) this.nodes.push(field);

      return true;
    } else {
      let set = false;

      for (let i = 0; i < this.nodes.length && !set; i++) {
        if (this.nodes[i].name === location[0]) {
          set = this.nodes[i].setFieldByLocation(field, location.slice(1));
        }
      }

      return set;
    }
  }
}
