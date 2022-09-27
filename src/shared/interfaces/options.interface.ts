import { ARGUMENT_TYPE } from "../constant/ARGUMENT_TYPE";

export interface FieldOptionsResp {
  parent: string;
  fields: FieldSchema[];
}

export interface FieldOptions extends FieldOptionsResp {
  id: number;
}

export interface FieldSchema {
  name: string;
  arguments: ArgumentSchema[];
  exampleValue: any;
}

export interface ArgumentSchema {
  argument: string;
  inputType: ARGUMENT_TYPE;
  selectValues?: string[];
  description: string;
}
