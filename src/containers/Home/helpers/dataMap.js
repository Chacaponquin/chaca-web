export const dataMap = (fields) => {
  let returnData = [];

  returnData = Object.keys(fields).map((el, i) => {
    return {
      id: Date.now() + i,
      name: el,
      fields: fields[el],
    };
  });

  return returnData;
};
