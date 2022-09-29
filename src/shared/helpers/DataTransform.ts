import {
  FieldOptionsResp,
  FieldOptions,
} from "../interfaces/options.interface";
import { ApiField, ApiFieldDocResp } from "../interfaces/api.interface";
import { API_SECTIONS } from "../constant/API_SECTIONS";
import { Dataset } from "../interfaces/datasets.interface";
import { DATA_TYPES } from "../constant/DATA_TYPES";
import { v4 as uuid } from "uuid";

export const DataTransform = {
  initialFieldsTransform: (fields: FieldOptionsResp[]): FieldOptions[] => {
    let returnData = [];

    returnData = fields.map((el, i) => {
      return { id: uuid(), fields: el.fields, parent: el.parent };
    });

    return returnData;
  },

  apiDocTransform: (options: ApiFieldDocResp[]): ApiField[] => {
    return options.map((el, i) => ({
      ...el,
      section: API_SECTIONS.FIELDS,
      id: uuid(),
      fields: el.fields.map((f) => ({
        ...f,
        route: `${process.env.REACT_APP_API_URL as string}${f.route}`,
      })),
    }));
  },

  dataMapToJsonTree: (datasets: Dataset[], fields: FieldOptions[]) => {
    const dataToTransform = JSON.parse(JSON.stringify(datasets)) as Dataset[];
    const fieldsTransform = JSON.parse(
      JSON.stringify(fields)
    ) as FieldOptions[];

    const mapData = dataToTransform.map((d) => {
      const fieldMap = d.fields.map((f) => {
        let dataReturn = null;

        fieldsTransform.forEach((field) => {
          if (
            f.dataType.type === DATA_TYPES.SINGLE_VALUE &&
            field.parent === f.dataType.fieldType.parent
          ) {
            field.fields.forEach((fAnid) => {
              if (
                f.dataType.type === DATA_TYPES.SINGLE_VALUE &&
                fAnid.name === f.dataType.fieldType.type
              ) {
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
  },

  descapitilizeArgument: (text: string): string => {
    let returnString = "";
    let mayus = false;

    for (let i = 0; i < text.length; i++) {
      if (i > 0 && i < text.length - 1) {
        if (text[i + 1].toUpperCase() === text[i + 1]) {
          returnString = returnString.concat(`${text[i]} `);
          mayus = true;
        } else {
          returnString = returnString.concat(
            mayus ? text[i].toUpperCase() : text[i].toLowerCase()
          );

          mayus = false;
        }
      } else if (i === 0) {
        returnString = returnString.concat(text[i].toUpperCase());
      } else {
        returnString = returnString.concat(
          mayus ? text[i].toUpperCase() : text[i].toLowerCase()
        );
        mayus = false;
      }
    }

    return returnString;
  },

  titlePipe: (text: string): string => {
    let returnString = "";

    let mayus = true;

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== "_" && text[i] !== "-") {
        returnString = returnString.concat(
          mayus ? text[i].toUpperCase() : text[i].toLowerCase()
        );
        mayus = false;
      } else {
        mayus = true;
        returnString = returnString.concat(` `);
        continue;
      }
    }

    return returnString;
  },

  showDataTransform(value: any) {
    let returnString = "";

    if (typeof value === "string" || typeof value === "number")
      returnString = `${value}`;
    else if (typeof value === "boolean") {
      returnString = `${value === true ? "true" : "false"}`;
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        returnString += `${this.getArrayString(value)}`;
      }
    }

    return returnString;
  },

  getSelectValues(array: any[]) {
    let returnArray = "";

    for (let i = 0; i < array.length; i++) {
      if (!(i === array.length - 1)) returnArray += `${array[i]} | `;
      else returnArray += `${array[i]}`;
    }

    return returnArray;
  },

  getArrayString(array: any[]) {
    let returnArray = "[";

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (!(i === array.length - 1))
          returnArray += `${this.getArrayString(array[i])}, `;
        else returnArray += `${this.getArrayString(array[i])}`;
      } else {
        if (i === array.length - 1) returnArray += `${array[i]}`;
        else returnArray += `${array[i]}, `;
      }
    }

    returnArray += "]";

    return returnArray;
  },
};
