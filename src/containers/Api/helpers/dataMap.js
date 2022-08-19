import { API_SECTIONS } from "./SECTIONS";

export const initialDataMap = (options) => {
  return options.map((el, i) => ({
    ...el,
    section: API_SECTIONS.FIELDS,
    id: Date.now() + i,
    fields: el.fields.map((f) => ({
      ...f,
      route: `${process.env.REACT_APP_API_URL}${f.route}`,
    })),
  }));
};
