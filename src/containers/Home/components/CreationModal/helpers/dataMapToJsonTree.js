export const dataMapToJsonTree = (datasets, fields) => {
  const dataToTransform = JSON.parse(JSON.stringify(datasets));
  const fieldsTransform = JSON.parse(JSON.stringify(fields));

  const mapData = dataToTransform.map((d) => {
    const fieldMap = d.fields.map((f) => {
      let dataReturn = null;

      fieldsTransform.forEach((field) => {
        if (field.name === f.type.parent) {
          field.fields.forEach((fAnid) => {
            if (fAnid.name === f.type.type) {
              dataReturn = fAnid.exampleValue;
            }
          });
        }
      });

      return { ...f, value: dataReturn };
    });

    let objectReturn = {};
    for (const data of fieldMap) {
      objectReturn = { ...objectReturn, [data.name]: data.value };
    }

    return {
      name: d.name,
      exampleField: objectReturn,
    };
  });

  let dataReturn = {};
  for (const dat of mapData) {
    dataReturn = { ...dataReturn, [dat.name]: dat.exampleField };
  }

  return dataReturn;
};
