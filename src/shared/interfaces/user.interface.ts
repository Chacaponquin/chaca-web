export interface LoginUser {
  username: string;
  email: string | null;
  password: string | null;
  isSuperUser: boolean;
  datasetsSchemas: UserDataScehma[];
  image: string | null;
  limitDatasets: number;
  limitDocuments: number;
}

export interface UserDataScehma {
  _id: string;
  name: string;
  data: { [path: string]: any };
}
