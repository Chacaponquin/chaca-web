import { DATA_TYPES } from "./datasetsUtils";

export const initialDataMap = (fields) => {
  let returnData = [];

  returnData = fields.map((el, i) => {
    return { id: Date.now() + i, name: el.parent, fields: el.fields };
  });

  return returnData;
};

export const returnDataMap = (datasets) => {
  const dataToTransform = JSON.parse(JSON.stringify(datasets));

  const returnData = dataToTransform.map((dat) => {
    const newFields = dat.fields.map((f) => {
      if (f.dataType.type === DATA_TYPES.REF) {
        dataToTransform.forEach((datAnid) => {
          if (datAnid.id === f.dataType.datasetID) {
            datAnid.fields.forEach((fAnid) => {
              if (fAnid.id === f.dataType.fieldRef) {
                f.dataType = {
                  type: f.dataType.type,
                  ref: datAnid.name,
                  fieldRef: fAnid.name,
                };
              }
            });
          }
        });
      }

      return f;
    });

    dat.fields = newFields;
    return dat;
  });

  return returnData;
};
