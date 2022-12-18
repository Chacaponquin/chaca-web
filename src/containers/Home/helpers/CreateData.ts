import { DATA_TYPES } from "../../../shared/constant/DATA_TYPES";
import {
  Dataset,
  DatasetField,
  SingleValueDataType,
} from "../../../shared/interfaces/datasets.interface";
import { Schema } from "../../../shared/interfaces/options.interface";
import { v4 as uuid } from "uuid";

export class CreateIntialData {
  private options: Schema[];

  constructor(options: Schema[]) {
    this.options = options;
  }

  public createField = (): DatasetField<SingleValueDataType> => {
    const option = this.options.find((el) => el.parent === "ID") as Schema;

    return {
      id: uuid(),
      name: `newField${uuid().slice(0, 3)}`,
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          args: {},
          parent: option.parent,
          type: option.options[0].name,
        },
      },
      isPosibleNull: false,
      isArray: null,
    };
  };

  public createDefaultDataset = (
    num: number,
    init: boolean = false
  ): Dataset => {
    let returnfields = [];

    for (let i = 0; i < 3; i++) {
      returnfields.push(this.createField());
    }

    return {
      id: uuid(),
      fields: init ? this.createDefaultFields() : returnfields,
      limit: 50,
      name: `${this.textFromNumber(num + 1)} Dataset`,
    };
  };

  public createDefaultFields = (): DatasetField[] => {
    const idParent = this.options.find((el) => el.parent === "ID") as Schema;
    const nameParent = this.options.find(
      (el) => el.parent === "NAME"
    ) as Schema;
    const imageParent = this.options.find(
      (el) => el.parent === "IMAGE"
    ) as Schema;

    const idField: DatasetField = {
      id: uuid(),
      name: "id",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          parent: idParent.parent,
          type: idParent.options[0].name,
          args: {},
        },
      },
      isArray: null,
      isPosibleNull: false,
    };

    const firstNameField: DatasetField = {
      id: uuid(),
      name: "firstName",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          parent: nameParent.parent,
          type: nameParent.options.find((el) => el.name === "First Name")!.name,
          args: {},
        },
      },
      isArray: null,
      isPosibleNull: false,
    };

    const avatarField: DatasetField = {
      id: uuid(),
      name: "avatar",
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          parent: imageParent.parent,
          type: imageParent.options.find((el) => el.name === "Avatar Icon")!
            .name,
          args: {},
        },
      },
      isArray: null,
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
