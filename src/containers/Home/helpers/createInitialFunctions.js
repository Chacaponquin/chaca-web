import { DATA_TYPES } from "../../../shared/helpers/datasetsUtils";

export const createInitialDataset = (num, init = false, options) => {
  let returnfields = [];

  for (let i = 0; i < 3; i++) {
    returnfields.push(createField(i));
  }

  return {
    id: Date.now(),
    fields: init ? createDefaultFields(options) : returnfields,
    limit: 50,
    name: `${textFromNumber(num + 1)} Dataset`,
  };
};

export const createField = (num) => {
  return {
    id: Date.now() + num,
    name: "",
    dataType: null,
    isPosibleNull: false,
    isArray: false,
  };
};

export const createDefaultFields = (options) => {
  const idParent = options.find((el) => el.name === "ID");
  const nameParent = options.find((el) => el.name === "NAME");
  const imageParent = options.find((el) => el.name === "IMAGE");

  const idField = {
    id: Date.now() + Math.random(),
    name: "id",
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        parent: idParent,
        type: idParent.fields[0],
        args: {},
      },
    },
  };

  const firstNameField = {
    id: Date.now() + Math.random(),
    name: "firstName",
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        parent: nameParent,
        type: nameParent.fields.find((el) => el.name === "First Name"),
        args: {},
      },
    },
  };

  const avatarField = {
    id: Date.now() + Math.random(),
    name: "avatar",
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        parent: imageParent,
        type: imageParent.fields.find((el) => el.name === "Avatar Icon"),
        args: {},
      },
    },
  };

  return [idField, firstNameField, avatarField];
};

const textFromNumber = (num) => {
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
