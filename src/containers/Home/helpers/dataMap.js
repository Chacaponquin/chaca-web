export const dataMap = (fields) => {
  let returnData = [];

  returnData = fields.map((el, i) => {
    return { id: Date.now() + i, name: el.parent, fields: el.fields };
  });

  return returnData;
};
