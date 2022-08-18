import { DATA_TYPES } from "../datasetsUtils";

export const createInitialDataset = (num) => {
  let fields = [];

  for (let i = 0; i < 3; i++) {
    fields.push(createField(i));
  }

  return {
    id: Date.now(),
    fields,
    limit: 50,
    name: `${textFromNumber(num + 1)} Dataset`,
  };
};

export const createField = (num) => {
  return {
    id: Date.now() + num,
    name: "",
    type: null,
    dataType: { type: DATA_TYPES.SINGLE_VALUE },
    isPosibleNull: false,
    isArray: false,
    args: {},
  };
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
