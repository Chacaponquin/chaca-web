import { API_SECTIONS } from "../constant/API_SECTIONS";
import { FieldOptionsResp, FieldSchema } from "./options.interface";

export interface ApiFieldDocResp extends FieldOptionsResp {
  fields: ApiFieldData[];
}

export interface SectionContent {
  [key: string]: ApiDocElement[];
}

export type ApiDocElement = {
  parent: string;
  id: string;
  section: API_SECTIONS;
  subElement: JSX.Element;
};

export interface ApiFieldData extends FieldSchema {
  route: string;
}

export interface ApiField extends ApiFieldDocResp {
  id: string;
  section: API_SECTIONS.FIELDS;
}

export type ApiSubSection =
  | {
      section: API_SECTIONS.FIELDS;
      subElement: {
        element: ApiField;
        id: string;
      };
    }
  | {
      section: API_SECTIONS.TOOL | API_SECTIONS.INTRODUCCION;
      subElement: { element: JSX.Element; id: string };
    };
