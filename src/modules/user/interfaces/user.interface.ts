export interface LoginUser {
  username: string
  isSuperUser: boolean
  image: string | null
  limitDatasets: number
  limitDocuments: number
}

export interface UserDataScehma {
  _id: string
  name: string
  data: { [path: string]: unknown }
}
