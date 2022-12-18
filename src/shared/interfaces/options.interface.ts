import { ARGUMENT_TYPE } from "../constant/ARGUMENT_TYPE";

export interface SchemasResp {
  parent: string;
  options: SubOption[];
}

export interface Schema extends SchemasResp {
  id: string;
}

export interface SubOption {
  name: string;
  arguments: ArgumentSchema[];
  exampleValue: unknown;
  description: string;
  route: string;
}

export interface ArgumentSchema {
  argument: string;
  inputType: ARGUMENT_TYPE;
  selectValues?: string[];
  description: string;
}
