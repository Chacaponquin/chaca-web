export interface LoginUser {
  username: string
  isSuperUser: boolean
  image: string | null
  limitDatasets: number
  limitDocuments: number
}

export interface UserDataScehma {
  id: string
  name: string
  data: string
}
