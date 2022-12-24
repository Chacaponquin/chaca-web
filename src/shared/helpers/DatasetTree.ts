import {
  Dataset,
  DatasetField,
  FieldDataType,
} from "../interfaces/datasets.interface";
import { NodeInfo } from "../interfaces/tree.interface";
import { v4 as uuid } from "uuid";
import { DATA_TYPES } from "../constant/DATA_TYPES";

export class DatasetTree {
  private root: RootNode;

  constructor(name: string, limit: number) {
    this.root = new RootNode(limit, name);
  }

  get name() {
    return this.root.name;
  }

  get limit() {
    return this.root.limit;
  }

  get id() {
    return this.root.id;
  }

  get fields() {
    return this.root.getFields();
  }

  public setLimit(limit: number) {
    this.root.limit = limit;
  }

  public setName(name: string) {
    this.root.name = name;
  }

  public findFieldByID(fieldID: string): FieldNode | null {
    return this.root.findFieldByID(fieldID);
  }

  public getDatasetObject(): Dataset {
    return {
      id: this.id,
      name: this.name,
      fields: this.fields,
      limit: this.limit,
    };
  }

  public setNodeByLocation(
    field: FieldNode | string,
    location: string[]
  ): void {
    if (typeof field === "string") {
      const found = this.findFieldByID(field);
      if (found) this.root.setFieldByLocation(found, location);
    } else this.root.setFieldByLocation(field, location);
  }

  public deleteField(fieldID: string) {
    this.root.deleteField(fieldID);
  }

  public getFieldLocation(fieldID: string): string[] {
    const ret = this.root.getFieldLocation(fieldID, []);

    if (ret) return ret;
    else return [];
  }
}

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

class RootNode extends Node {
  constructor(public limit: number, name: string) {
    super(name);
  }

  public getFields(): DatasetField[] {
    return this.nodes.map((el) => el.getNodeObject());
  }

  public setField(field: FieldNode) {
    this.nodes.push(field);
  }
}

export class FieldNode<T = FieldDataType> extends Node {
  public info: NodeInfo<T>;

  constructor(name: string, info: NodeInfo<T>) {
    super(name);
    this.info = info;
  }

  public getNodeObject(): DatasetField<T> {
    if (this.nodes.length === 0) {
      return { ...this.info, id: this.id, name: this.name };
    } else {
      return {
        ...this.info,
        id: this.id,
        name: this.name,
        dataType: {
          object: this.nodes.map((el) => el.getNodeObject()),
          type: DATA_TYPES.MIXED,
        },
      } as DatasetField<T>;
    }
  }
}
