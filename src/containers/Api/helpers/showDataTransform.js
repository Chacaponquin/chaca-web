export const showDataTransform = (value) => {
  let returnString = "";

  if (typeof value === "string" || typeof value === "number")
    returnString = `${value}`;
  else if (typeof value === "boolean") {
    returnString = `${value ? "true" : "false"}`;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      returnString += `${getArrayString(value)}`;
    }
  }

  return returnString;
};

export const getSelectValues = (array) => {
  let returnArray = "";

  for (let i = 0; i < array.length; i++) {
    if (!(i === array.length - 1)) returnArray += `${array[i]} | `;
    else returnArray += `${array[i]}`;
  }

  return returnArray;
};

const getArrayString = (array) => {
  let returnArray = "[";

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (!(i === array.length - 1))
        returnArray += `${getArrayString(array[i])}, `;
      else returnArray += `${getArrayString(array[i])}`;
    } else {
      if (i === array.length - 1) returnArray += `${array[i]}`;
      else returnArray += `${array[i]}, `;
    }
  }

  returnArray += "]";

  return returnArray;
};
