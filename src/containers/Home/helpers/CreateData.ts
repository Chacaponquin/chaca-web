import { DATA_TYPES } from "../../../shared/constant/DATA_TYPES";
import {
  Dataset,
  DatasetField,
} from "../../../shared/interfaces/datasets.interface";
import { FieldOptions } from "../../../shared/interfaces/options.interface";
import { v4 as uuid } from "uuid";

export class CreateIntialData {
  private options: FieldOptions[];

  constructor(options: FieldOptions[]) {
    this.options = options;
  }

  public createField = (num: number): DatasetField => {
    const option = this.options.find(
      (el) => el.parent === "ID"
    ) as FieldOptions;

    return {
      id: uuid(),
      name: "",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          args: {},
          parent: option.parent,
          type: option.fields[0].name,
        },
      },
      isPosibleNull: false,
      isArray: false,
    };
  };

  public createDefaultDataset = (
    num: number,
    init: boolean = false
  ): Dataset => {
    let returnfields = [];

    for (let i = 0; i < 3; i++) {
      returnfields.push(this.createField(i));
    }

    return {
      id: uuid(),
      fields: init ? this.createDefaultFields() : returnfields,
      limit: 50,
      name: `${this.textFromNumber(num + 1)} Dataset`,
    };
  };

  public createDefaultFields = (): DatasetField[] => {
    const idParent = this.options.find(
      (el) => el.parent === "ID"
    ) as FieldOptions;
    const nameParent = this.options.find(
      (el) => el.parent === "NAME"
    ) as FieldOptions;
    const imageParent = this.options.find(
      (el) => el.parent === "IMAGE"
    ) as FieldOptions;

    const idField: DatasetField = {
      id: uuid(),
      name: "id",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          parent: idParent.parent,
          type: idParent.fields[0].name,
          args: {},
        },
      },
      isArray: false,
      isPosibleNull: false,
    };

    const firstNameField: DatasetField = {
      id: uuid(),
      name: "firstName",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          parent: nameParent.parent,
          type: nameParent.fields.find((el) => el.name === "First Name")!.name,
          args: {},
        },
      },
      isArray: false,
      isPosibleNull: false,
    };

    const avatarField: DatasetField = {
      id: uuid(),
      name: "avatar",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          parent: imageParent.parent,
          type: imageParent.fields.find((el) => el.name === "Avatar Icon")!
            .name,
          args: {},
        },
      },
      isArray: false,
      isPosibleNull: false,
    };

    return [idField, firstNameField, avatarField];
  };

  private textFromNumber = (num: number): string => {
    if (num === 1) return "First";
    else if (num === 2) return "Second";
    else if (num === 3) return "Third";
    else if (num === 4) return "Forth";
    else if (num === 5) return "Fifth";
    else if (num === 6) return "Six";
    else if (num === 7) return "Seven";
    else if (num === 8) return "Eight";
    else if (num === 9) return "Nine";
    else if (num === 10) return "Ten";
    else return "";
  };
}
