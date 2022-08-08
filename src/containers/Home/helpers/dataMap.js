export const dataMap = (fields) => {
  let returnData = [];

  returnData = Object.keys(fields).map((el, i) => {
    return {
      id: Date.now() + i,
      name: el,
      fields: [...Object.values(fields[el])],
    };
  });

  return returnData;
};
